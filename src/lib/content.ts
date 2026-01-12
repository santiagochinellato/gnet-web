import content from "@/data/site-content.json";
import { SiteContent } from "@/types/content";

export function getSiteContent(): SiteContent {
  return content as unknown as SiteContent;
}
