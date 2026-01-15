"use client";

import { useState } from "react";
import { X, Download, Upload, Activity, CheckCircle2 } from "lucide-react";

interface SpeedTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TestStatus = "idle" | "testing" | "complete";

interface TestResults {
  ping: number | null;
  download: number | null;
  upload: number | null;
}

export function SpeedTestModal({ isOpen, onClose }: SpeedTestModalProps) {
  const [status, setStatus] = useState<TestStatus>("idle");
  const [currentTest, setCurrentTest] = useState<
    "ping" | "download" | "upload" | null
  >(null);
  const [results, setResults] = useState<TestResults>({
    ping: null,
    download: null,
    upload: null,
  });

  const runSpeedTest = async () => {
    setStatus("testing");

    // 1. Ping Test
    setCurrentTest("ping");
    const pingResult = await testPing();
    setResults((prev) => ({ ...prev, ping: pingResult }));
    await sleep(500);

    // 2. Download Test
    setCurrentTest("download");
    const downloadResult = await testDownload();
    setResults((prev) => ({ ...prev, download: downloadResult }));
    await sleep(500);

    // 3. Upload Test
    setCurrentTest("upload");
    const uploadResult = await testUpload();
    setResults((prev) => ({ ...prev, upload: uploadResult }));

    setCurrentTest(null);
    setStatus("complete");
  };

  const testPing = async (): Promise<number> => {
    const iterations = 5;
    let totalTime = 0;

    for (let i = 0; i < iterations; i++) {
      const start = performance.now();
      await fetch(window.location.origin, {
        method: "HEAD",
        cache: "no-cache",
      });
      const end = performance.now();
      totalTime += end - start;
    }

    return Math.round(totalTime / iterations);
  };

  const testDownload = async (): Promise<number> => {
    try {
      // Use a test file or image from the site
      const testUrl = window.location.origin + "/opengraph-image.png";
      const startTime = performance.now();

      const response = await fetch(testUrl + "?t=" + Date.now(), {
        cache: "no-cache",
      });

      const blob = await response.blob();
      const endTime = performance.now();

      const durationSeconds = (endTime - startTime) / 1000;
      const sizeBytes = blob.size;
      const sizeMegabits = (sizeBytes * 8) / 1000000;
      const speedMbps = sizeMegabits / durationSeconds;

      return Math.round(speedMbps * 10) / 10;
    } catch (error) {
      console.error("Download test error:", error);
      return 0;
    }
  };

  const testUpload = async (): Promise<number> => {
    try {
      // Create test data (1MB)
      const testData = new Blob([new ArrayBuffer(1024 * 1024)]);
      const formData = new FormData();
      formData.append("test", testData);

      const startTime = performance.now();

      // Send to a dummy endpoint (will fail but we measure the upload time)
      await fetch("/api/speed-test", {
        method: "POST",
        body: formData,
      }).catch(() => {
        // Expected to fail, we just want to measure upload time
      });

      const endTime = performance.now();

      const durationSeconds = (endTime - startTime) / 1000;
      const sizeMegabits = (testData.size * 8) / 1000000;
      const speedMbps = sizeMegabits / durationSeconds;

      return Math.round(speedMbps * 10) / 10;
    } catch (error) {
      console.error("Upload test error:", error);
      return 0;
    }
  };

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const getSpeedColor = (
    speed: number | null,
    type: "ping" | "download" | "upload"
  ) => {
    if (speed === null) return "text-slate-400";

    if (type === "ping") {
      if (speed < 20) return "text-emerald-400";
      if (speed < 50) return "text-yellow-400";
      if (speed < 100) return "text-orange-400";
      return "text-red-400";
    } else {
      // Download/Upload
      if (speed > 50) return "text-emerald-400";
      if (speed > 20) return "text-yellow-400";
      if (speed > 10) return "text-orange-400";
      return "text-red-400";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-xl p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">Test de Velocidad</h2>
          <p className="text-sm text-slate-400 mt-1">
            Comprobá la velocidad real de tu conexión
          </p>
        </div>

        {/* Test Results */}
        <div className="space-y-4 mb-6">
          {/* Ping */}
          <div className="flex items-center justify-between rounded-xl border border-slate-700/50 bg-slate-800/50 p-4">
            <div className="flex items-center gap-3">
              <div
                className={`rounded-lg p-2 ${currentTest === "ping" ? "bg-cyan-500/20" : "bg-slate-700/50"}`}
              >
                <Activity
                  className={`w-5 h-5 ${currentTest === "ping" ? "text-cyan-400 animate-spin" : "text-slate-400"}`}
                />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Ping</div>
                <div className="text-xs text-slate-500">Latencia</div>
              </div>
            </div>
            <div className="text-right">
              {results.ping !== null ? (
                <>
                  <div
                    className={`text-2xl font-bold tabular-nums ${getSpeedColor(results.ping, "ping")}`}
                  >
                    {results.ping}
                  </div>
                  <div className="text-xs text-slate-500">ms</div>
                </>
              ) : (
                <div className="text-2xl font-bold text-slate-600">--</div>
              )}
            </div>
          </div>

          {/* Download */}
          <div className="flex items-center justify-between rounded-xl border border-slate-700/50 bg-slate-800/50 p-4">
            <div className="flex items-center gap-3">
              <div
                className={`rounded-lg p-2 ${currentTest === "download" ? "bg-cyan-500/20" : "bg-slate-700/50"}`}
              >
                <Download
                  className={`w-5 h-5 ${currentTest === "download" ? "text-cyan-400 animate-bounce" : "text-slate-400"}`}
                />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Descarga</div>
                <div className="text-xs text-slate-500">Download</div>
              </div>
            </div>
            <div className="text-right">
              {results.download !== null ? (
                <>
                  <div
                    className={`text-2xl font-bold tabular-nums ${getSpeedColor(results.download, "download")}`}
                  >
                    {results.download}
                  </div>
                  <div className="text-xs text-slate-500">Mbps</div>
                </>
              ) : (
                <div className="text-2xl font-bold text-slate-600">--</div>
              )}
            </div>
          </div>

          {/* Upload */}
          <div className="flex items-center justify-between rounded-xl border border-slate-700/50 bg-slate-800/50 p-4">
            <div className="flex items-center gap-3">
              <div
                className={`rounded-lg p-2 ${currentTest === "upload" ? "bg-cyan-500/20" : "bg-slate-700/50"}`}
              >
                <Upload
                  className={`w-5 h-5 ${currentTest === "upload" ? "text-cyan-400 animate-bounce" : "text-slate-400"}`}
                />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Subida</div>
                <div className="text-xs text-slate-500">Upload</div>
              </div>
            </div>
            <div className="text-right">
              {results.upload !== null ? (
                <>
                  <div
                    className={`text-2xl font-bold tabular-nums ${getSpeedColor(results.upload, "upload")}`}
                  >
                    {results.upload}
                  </div>
                  <div className="text-xs text-slate-500">Mbps</div>
                </>
              ) : (
                <div className="text-2xl font-bold text-slate-600">--</div>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={runSpeedTest}
          disabled={status === "testing"}
          className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {status === "testing" ? (
            <>
              <Activity className="w-5 h-5 animate-spin" />
              Probando...
            </>
          ) : status === "complete" ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Probar de nuevo
            </>
          ) : (
            "Iniciar Test"
          )}
        </button>

        {/* Info */}
        {status === "complete" && (
          <p className="text-xs text-center text-slate-500 mt-4">
            Con WiFi 6 de Gnet, tendrías 4ms de ping y hasta 1 Gbps
          </p>
        )}
      </div>
    </div>
  );
}
