import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gnet Telecomunicaciones',
    short_name: 'Gnet',
    description: 'Internet de Alta Velocidad en Bariloche',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1565c0',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
