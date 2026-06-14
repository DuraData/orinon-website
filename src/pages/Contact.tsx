import { useMemo, useState } from 'react';
import { LuClock3, LuMail, LuMapPin, LuPhone } from 'react-icons/lu';

import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { services } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

const contactCards = [
  {
    icon: LuPhone,
    label: 'Phone',
    value: '+1 (415) 555-0192',
    sub: 'Mon-Fri, 9am-6pm PT',
  },
  {
    icon: LuMail,
    label: 'Email',
    value: 'hello@orinon.com',
    sub: 'We reply within one business day',
  },
  {
    icon: LuMapPin,
    label: 'Office',
    value: '535 Mission St, Suite 1400',
    sub: 'San Francisco, CA 94105',
  },
  {
    icon: LuClock3,
    label: 'Business Hours',
    value: '9:00 AM - 6:00 PM PT',
    sub: '24/7 support for managed clients',
  },
];

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  usePageMeta(
    'Contact | Orinon',
    'Contact Orinon to discuss cloud, software, security, data, AI, and managed IT engagements.',
  );

  const errors = useMemo(() => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) nextErrors.name = 'Please enter your full name.';
    if (!form.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!form.service) nextErrors.service = 'Please choose a service.';
    if (!form.message.trim()) nextErrors.message = 'Please tell us about your project.';
    else if (form.message.trim().length < 10) {
      nextErrors.message = 'A little more detail helps us help you.';
    }

    return nextErrors;
  }, [form]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(true);

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const fieldClass = (field: keyof FormState) =>
    `w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
      touched && errors[field]
        ? 'border-red-300 bg-red-50'
        : 'border-slate-200 bg-white focus:border-brand-700'
    }`;

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let’s build something great"
        description="Tell us about your project and a senior member of our team will reply within one business day."
      />

      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-[1.3fr_.85fr]">
          <Reveal>
            <Card className="rounded-[1.4rem] p-8 shadow-soft sm:p-10">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-4xl text-emerald-600">
                    ✓
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-bold text-ink">
                    Thank you, message sent
                  </h2>
                  <p className="mx-auto mt-4 max-w-md leading-8 text-muted">
                    We&apos;ve received your enquiry and a member of our team will be in touch
                    within one business day.
                  </p>
                  <Button className="mt-8" onClick={() => setSubmitted(false)}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div>
                    <h2 className="font-display text-3xl font-bold text-ink">Send us a message</h2>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate">Full Name *</span>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={fieldClass('name')}
                        placeholder="Jane Doe"
                      />
                      {touched && errors.name ? (
                        <span className="mt-2 block text-sm text-red-600">{errors.name}</span>
                      ) : null}
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate">Email *</span>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={fieldClass('email')}
                        placeholder="jane@company.com"
                      />
                      {touched && errors.email ? (
                        <span className="mt-2 block text-sm text-red-600">{errors.email}</span>
                      ) : null}
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate">Phone</span>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={fieldClass('phone')}
                        placeholder="+1 (___) ___-____"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate">Company Name</span>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className={fieldClass('company')}
                        placeholder="Company name"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate">
                      Service Interested In *
                    </span>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={fieldClass('service')}
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Something else">Something else</option>
                    </select>
                    {touched && errors.service ? (
                      <span className="mt-2 block text-sm text-red-600">{errors.service}</span>
                    ) : null}
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate">Message *</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={`${fieldClass('message')} resize-y`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                    {touched && errors.message ? (
                      <span className="mt-2 block text-sm text-red-600">{errors.message}</span>
                    ) : null}
                  </label>

                  <Button className="w-full" type="submit">
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className="flex gap-4 rounded-[1.125rem] border border-line bg-cloud p-5"
                  >
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-xl text-brand-700">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                        {card.label}
                      </p>
                      <p className="mt-1 font-display text-lg font-bold text-ink">{card.value}</p>
                      <p className="mt-1 text-sm text-muted">{card.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </Container>

        <Container className="mt-12">
          <Reveal>
            <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-[1.4rem] border border-line bg-[repeating-linear-gradient(45deg,#EAECF5_0px,#EAECF5_14px,#F2F3FA_14px,#F2F3FA_28px)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(61,46,181,.08),transparent_60%)]" />
              <div className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center text-brand-700">
                  <LuMapPin className="text-5xl" />
                </div>
                <h2 className="mt-3 font-display text-xl font-bold text-ink">
                  535 Mission St, San Francisco
                </h2>
                <p className="mt-2 font-display text-xs uppercase tracking-[0.22em] text-slate-400">
                  Embedded map placeholder
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
