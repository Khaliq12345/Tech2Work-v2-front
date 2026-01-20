<template>
  <div class="min-h-screen bg-white py-8 px-4">
    <div class="max-w-7xl mx-auto p-8 md:p-12">
      <!-- Header -->
      <header class="text-center mb-12 pb-8 border-b-2 border-gray-100">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <div
          class="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-700"
        >
          <p class="m-0"><strong>Effective Date:</strong> January 19, 2026</p>
          <p class="m-0"><strong>Last Updated:</strong> January 19, 2026</p>
        </div>
      </header>

      <!-- Grid avec 2 colonnes -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
        <TermsPrivacy
          title="Introduction"
          content="This Privacy Policy describes how TECH2WORK ('we,' 'our,' or 'us') collects, uses, discloses, and protects information when you use our website, services, and interact with our software development agency. We are committed to protecting your privacy and handling your data transparently and securely."
        />

        <TermsPrivacy
          title="Information We Collect"
          intro="We collect information in several ways:"
          :items="[
            'Information you provide directly (name, email, phone, company)',
            'Information collected automatically (IP, browser, device info)',
            'Project-related information and business requirements',
            'Payment information and billing details',
            'Communication records and feedback',
          ]"
        />

        <TermsPrivacy
          title="How We Use Your Information"
          intro="We use collected information to:"
          :items="[
            'Provide and improve our software development services',
            'Communicate with you about projects and services',
            'Process payments and fulfill contracts',
            'Develop, test, and deliver software solutions',
            'Provide technical support and maintenance',
            'Analyze and improve our website and services',
          ]"
        />

        <TermsPrivacy
          title="Legal Basis for Processing"
          :sections="[
            {
              title: 'Contract Performance',
              content: 'When necessary to fulfill our service agreements',
            },
            {
              title: 'Legitimate Interests',
              content: 'In operating and improving our business',
            },
            {
              title: 'Legal Compliance',
              content: 'With applicable laws and regulations',
            },
            {
              title: 'Consent',
              content: 'Where you have given explicit permission',
            },
          ]"
        />

        <TermsPrivacy
          title="Information Sharing"
          intro="We do not sell your personal information. We may share with:"
          :items="[
            'Service providers and contractors',
            'Cloud hosting providers',
            'Payment processors and analytics providers',
            'Professional advisors (lawyers, accountants)',
            'With your explicit consent',
          ]"
        />

        <TermsPrivacy
          title="Data Security"
          intro="We implement security measures including:"
          :items="[
            'Encryption of data in transit and at rest',
            'Secure access controls and authentication',
            'Regular security assessments',
            'Employee training on data protection',
            'Secure development practices',
          ]"
        />

        <TermsPrivacy
          title="Data Retention"
          content="We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations (typically 7 years for financial records), resolve disputes, and enforce our agreements."
        />

        <TermsPrivacy
          title="Your Rights"
          intro="You have the right to:"
          :items="[
            'Access your personal information',
            'Correct inaccurate data',
            'Request deletion of your information',
            'Object to processing activities',
            'Receive data in portable format',
            'Withdraw consent',
            'Opt-out of marketing communications',
          ]"
        />

        <TermsPrivacy
          title="Third-Party Links"
          content="Our website and services may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their privacy policies."
        />

        <TermsPrivacy
          title="International Transfers"
          content="Your information may be transferred to and processed in countries where we operate. We ensure appropriate safeguards are in place for such transfers in accordance with applicable data protection laws."
        />

        <TermsPrivacy
          title="Children's Privacy"
          content="Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately."
        />

        <TermsPrivacy
          title="Changes to Policy"
          content="We may update this Privacy Policy periodically. We will notify you of material changes by posting the updated policy and updating the 'Last Updated' date. Your continued use after changes constitutes acceptance."
        />
      </div>

      <!-- Contact Information -->
      <section class="mt-12 pt-8 border-t-2 border-gray-200">
        <div class="lg:col-span-1 mb-4">
          <h2 class="text-2xl font-semibold text-gray-800">
            Contact Information
          </h2>
        </div>
        <div class="lg:col-span-2">
          <p class="text-base md:text-lg text-gray-700 mb-4">
            If you have questions about this Privacy Policy, please contact us
            at:
          </p>
          <div class="mt-4 p-4 md:p-6 bg-gray-50">
            <p class="text-lg text-gray-800 font-semibold mb-3">
              TECH2WORK SARL
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <p class="text-base text-gray-700">
                  <strong>Email:</strong>
                  <a
                    href="mailto:contact@tech2work.tech"
                    class="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                    >contact@tech2work.tech</a
                  >
                </p>
                <p class="text-base text-gray-700">
                  <strong>Address:</strong> Cotonou, Benin
                </p>
              </div>
              <div>
                <p class="text-base text-gray-700">
                  <strong>Phone:</strong> +2290162369889
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
