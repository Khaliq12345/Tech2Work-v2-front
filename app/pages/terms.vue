<template>
  <div class="min-h-screen bg-white py-8 px-4">
    <div class="max-w-7xl mx-auto p-8 md:p-12">
      <!-- Header -->
      <header class="text-center mb-12 pb-8 border-b-2 border-gray-100">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Terms of Service
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
          title="Agreement to Terms"
          content="These Terms of Service ('Terms') govern your use of TECH2WORK's website and software development services. By accessing our website or engaging our services, you agree to be bound by these Terms."
        />

        <TermsPrivacy
          title="Services Description"
          intro="We provide custom software development services including:"
          :items="[
            'Web application development',
            'Mobile application development',
            'Software consulting and architecture',
            'Maintenance and support services',
            'Cloud infrastructure and API development',
          ]"
        />

        <TermsPrivacy
          title="Client Responsibilities"
          intro="Clients agree to:"
          :items="[
            'Provide timely and accurate information',
            'Designate authorized representatives',
            'Provide timely feedback and approvals',
            'Ensure rights to provided materials',
            'Pay all fees according to terms',
            'Comply with applicable laws',
          ]"
        />

        <TermsPrivacy
          title="Intellectual Property Rights"
          :sections="[
            {
              title: 'Client Materials',
              content:
                'You retain all rights. We receive a limited license for service delivery.',
            },
            {
              title: 'Work Product',
              content:
                'Upon payment, we transfer ownership of final deliverables. We retain pre-existing IP and tools.',
            },
            {
              title: 'Portfolio Rights',
              content:
                'We may display projects unless confidentiality is requested in writing.',
            },
          ]"
        />

        <TermsPrivacy
          title="Payment Terms"
          intro="Payment terms typically include:"
          :items="[
            'Deposit before work begins',
            'Milestone payments during project',
            'Final payment upon completion',
          ]"
          content="Late payments may incur interest and service suspension. All fees are non-refundable unless specified."
        />

        <TermsPrivacy
          title="Project Timeline"
          content="Timelines are estimates. Actual completion may vary based on complexity, feedback cycles, and technical challenges. Scope changes require change orders with adjusted timelines and costs."
        />

        <TermsPrivacy
          title="Warranties and Disclaimers"
          content="We warrant professional, workmanlike service. We disclaim all other warranties, including merchantability and fitness for purpose. Software is not warranted error-free."
        />

        <TermsPrivacy
          title="Limitation of Liability"
          content="Our liability is limited to fees paid in the 12 months preceding the claim. We are not liable for indirect, incidental, special, consequential, or punitive damages."
        />

        <TermsPrivacy
          title="Confidentiality"
          content="Both parties maintain confidentiality of proprietary information. This obligation survives termination."
        />

        <TermsPrivacy
          title="Termination"
          intro="Either party may terminate with written notice. Upon termination:"
          :items="[
            'Pay for services performed',
            'Deliver work product upon payment',
            'Return/destroy confidential information',
            'IP, confidentiality, and liability provisions survive',
          ]"
        />

        <TermsPrivacy
          title="Indemnification"
          content="You indemnify us against claims arising from your use of deliverables, breach of Terms, violation of laws, or materials that infringe third-party IP rights."
        />

        <TermsPrivacy
          title="Dispute Resolution"
          content="Disputes first addressed through negotiation. If unresolved in 30 days, mediation in Cotonou, Benin."
        />

        <TermsPrivacy
          title="Governing Law"
          content="These Terms are governed by the laws of the Republic of Benin, without regard to conflict of law principles."
        />

        <TermsPrivacy
          title="Force Majeure"
          content="Neither party is liable for delays from circumstances beyond reasonable control, including natural disasters, war, terrorism, government actions, labor disputes, or service interruptions."
        />

        <TermsPrivacy
          title="Independent Contractor"
          content="We are an independent contractor. Neither party has authority to bind the other or create obligations on behalf of the other."
        />

        <TermsPrivacy
          title="Entire Agreement"
          content="These Terms and project agreements constitute the entire agreement. Modifications require written agreement from both parties."
        />

        <TermsPrivacy
          title="Severability"
          content="If any provision is unenforceable, it will be limited or eliminated to the minimum extent necessary, and remaining provisions stay in effect."
        />

        <TermsPrivacy
          title="Waiver"
          content="Failure to enforce any right or provision does not constitute a waiver of that right or provision."
        />

        <TermsPrivacy
          title="Assignment"
          content="You may not assign these Terms without our prior written consent. We may assign them in connection with a merger, acquisition, or asset sale with notice to you."
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
            For questions about these Terms of Service, please contact us at:
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

<script setup lang="ts"></script>
