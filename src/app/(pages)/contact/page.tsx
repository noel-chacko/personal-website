import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/sections/ContactForm';

export default function Contact() {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
} 