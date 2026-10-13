import {
  Stethoscope, HeartPulse, Bone, Baby, Users, Activity,
  Ambulance, TestTube2, Bed, Pill, Microscope, Building2,
  Heart, ShieldCheck, CalendarDays, UserRoundSearch
} from 'lucide-react';

export const departments = [
  { name: 'General Medicine', description: 'Care enquiries for common health concerns.', icon: Stethoscope, image: 'photo-1612349317150-e413f6a5b16d' },
  { name: 'Cardiology', description: 'Heart-health consultation enquiries.', icon: Heart, image: 'photo-1579684385127-1ef15d508118' },
  { name: 'Orthopedics', description: 'Bone, joint and mobility care enquiries.', icon: Bone, image: 'photo-1559757175-0eb30cd8c063' },
  { name: 'Gynecology & Obstetrics', description: 'Women’s health care enquiries.', icon: Baby, image: 'photo-1532938911079-1b06ac7ceec7' },
  { name: 'Pediatrics', description: 'Healthcare enquiries for children.', icon: Users, image: 'photo-1516627145497-ae6968895b74' },
  { name: 'ENT', description: 'Ear, nose and throat care enquiries.', icon: Activity, image: 'photo-1584982751601-97dcc096659c' }
];

export const quickActions = [
  { title: 'Book an Appointment', subtitle: 'Quick enquiry form', icon: CalendarDays, target: 'appointment' },
  { title: 'Find a Doctor', subtitle: 'Browse care profiles', icon: UserRoundSearch, target: 'doctors' },
  { title: 'Our Departments', subtitle: 'Explore care options', icon: Stethoscope, target: 'departments' },
  { title: 'Health Checkup', subtitle: 'Ask about availability', icon: HeartPulse, target: 'appointment' }
];

export const highlights = [
  { title: 'Patient Centric Approach', icon: Heart },
  { title: 'Modern Infrastructure', icon: Building2 },
  { title: 'Diagnostic Facilities', icon: Microscope },
  { title: 'Dedicated Medical Team', icon: Users }
];

export const services = [
  { title: 'Emergency Care', description: 'Contact the hospital for urgent assistance.', icon: Ambulance },
  { title: 'Diagnostic Services', description: 'Ask the team about available services.', icon: TestTube2 },
  { title: 'In-Patient Facilities', description: 'Enquire about patient accommodation.', icon: Bed },
  { title: 'Pharmacy', description: 'Confirm current services and hours.', icon: Pill }
];

export const values = [
  { title: 'Quality Healthcare', icon: ShieldCheck },
  { title: 'Compassionate Care', icon: HeartPulse },
  { title: 'Advanced Technology', icon: Microscope },
  { title: 'Supportive Environment', icon: Heart }
];

export const gallery = [
  { title: 'Reception', image: 'photo-1519494026892-80bbd2d6fd0d' },
  { title: 'Patient Rooms', image: 'photo-1516549655169-df83a0774514' },
  { title: 'Consultation Area', image: 'photo-1584982751601-97dcc096659c' },
  { title: 'Medical Equipment', image: 'photo-1511174511562-5f7f18b874f8' },
  { title: 'Waiting Area', image: 'photo-1519494080410-f9aa76cb4283' },
  { title: 'Clinical Space', image: 'photo-1579684385127-1ef15d508118' }
];
