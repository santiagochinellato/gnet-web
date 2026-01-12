import { defineType } from 'sanity'

const icons = [
  'Headset', 'Zap', 'ShieldCheck', 'FileText', 'Phone', 'Mail', 'MapPin',
  'CheckCircle', 'Star', 'Quote', 'BadgeCheck', 'Calendar', 'Server',
  'Globe', 'Shield', 'PcCase', 'ArrowRight', 'Store', 'Building2',
  'Home', 'Video', 'Fingerprint', 'Wrench', 'Bell', 'Cable', 'Settings',
  'AtSign', 'Clock', 'ChevronDown', 'MessageCircle'
]

export default defineType({
  name: 'iconSelect',
  title: 'Icon',
  type: 'string',
  options: {
    list: icons.map(icon => ({ title: icon, value: icon })),
    layout: 'dropdown'
  }
})
