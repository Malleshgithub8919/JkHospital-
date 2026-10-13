import { useEffect, useState } from 'react';
import { CalendarDays, UserRound, Phone, HeartPulse, ClipboardList, CheckCircle2 } from 'lucide-react';
import { departments } from '../data/siteData.js';

export default function AppointmentForm({ selectedDepartment }) {
  const [form, setForm] = useState({ name:'', phone:'', department:'', date:'', message:'' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (selectedDepartment) setForm(old => ({ ...old, department: selectedDepartment }));
  }, [selectedDepartment]);

  function update(field, value) {
    setForm(old => ({ ...old, [field]: value }));
    setErrors(old => ({ ...old, [field]: '' }));
    setSuccess(false);
  }

  function submit(event) {
    event.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[+()\-\s\d]{8,16}$/.test(form.phone.trim())) next.phone = 'Enter a valid phone number.';
    if (!form.department) next.department = 'Please choose a department.';
    setErrors(next);
    if (Object.keys(next).length === 0) setSuccess(true);
  }

  return <form className="appointment-form" onSubmit={submit} noValidate>
    <div className="form-title"><span><CalendarDays/></span><div><h3>Book an Appointment</h3><p>Fill in the details and our team can get in touch with you.</p></div></div>
    <div className="form-grid">
      <label><span><UserRound size={14}/> Your Name *</span><input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Full name" autoComplete="name"/>{errors.name && <small className="field-error">{errors.name}</small>}</label>
      <label><span><Phone size={14}/> Phone Number *</span><input value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="Phone number" inputMode="tel" autoComplete="tel"/>{errors.phone && <small className="field-error">{errors.phone}</small>}</label>
      <label><span><HeartPulse size={14}/> Department *</span><select value={form.department} onChange={e => update('department', e.target.value)}><option value="">Select department</option>{departments.map(d => <option key={d.name}>{d.name}</option>)}</select>{errors.department && <small className="field-error">{errors.department}</small>}</label>
      <label><span><CalendarDays size={14}/> Preferred Date</span><input type="date" min={new Date().toISOString().slice(0,10)} value={form.date} onChange={e => update('date', e.target.value)}/></label>
      <label className="form-wide"><span><ClipboardList size={14}/> Your Message (Optional)</span><textarea rows="3" value={form.message} onChange={e => update('message', e.target.value)} placeholder="How can we help?"/></label>
    </div>
    <button className="button button-teal form-submit">Submit Enquiry <span>→</span></button>
    {success && <p className="form-success"><CheckCircle2 size={15}/> Details validated. This demo does not send or confirm appointments.</p>}
    <p className="form-note">This is an enquiry form. The hospital team must contact you to confirm an appointment.</p>
  </form>;
}
