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

      <!-- Grid avec 2 colonnes - cartes sans fond -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
        <!-- Agreement to Terms -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Agreement to Terms
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            These Terms of Service ("Terms") govern your use of TECH2WORK's
            website and software development services. By accessing our website
            or engaging our services, you agree to be bound by these Terms.
          </p>
        </section>

        <!-- Services Description -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Services Description
          </h2>
          <p class="text-sm md:text-base text-gray-700 mb-2">
            We provide custom software development services including:
          </p>
          <ul class="text-xs md:text-sm text-gray-700 space-y-1 pl-3">
            <li>• Web application development</li>
            <li>• Mobile application development</li>
            <li>• Software consulting and architecture</li>
            <li>• Maintenance and support services</li>
            <li>• Cloud infrastructure and API development</li>
          </ul>
        </section>

        <!-- Client Responsibilities -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Client Responsibilities
          </h2>
          <p class="text-sm md:text-base text-gray-700 mb-2">
            Clients agree to:
          </p>
          <ul class="text-xs md:text-sm text-gray-700 space-y-1 pl-3">
            <li>• Provide timely and accurate information</li>
            <li>• Designate authorized representatives</li>
            <li>• Provide timely feedback and approvals</li>
            <li>• Ensure rights to provided materials</li>
            <li>• Pay all fees according to terms</li>
            <li>• Comply with applicable laws</li>
          </ul>
        </section>

        <!-- Intellectual Property Rights -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Intellectual Property Rights
          </h2>
          <div class="space-y-2 text-xs md:text-sm">
            <div>
              <h3 class="font-semibold text-gray-700">Client Materials</h3>
              <p class="text-gray-700">
                You retain all rights. We receive a limited license for service
                delivery.
              </p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-700">Work Product</h3>
              <p class="text-gray-700">
                Upon payment, we transfer ownership of final deliverables. We
                retain pre-existing IP and tools.
              </p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-700">Portfolio Rights</h3>
              <p class="text-gray-700">
                We may display projects unless confidentiality is requested in
                writing.
              </p>
            </div>
          </div>
        </section>

        <!-- Payment Terms -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Payment Terms
          </h2>
          <p class="text-sm md:text-base text-gray-700 mb-2">
            Payment terms typically include:
          </p>
          <ul class="text-xs md:text-sm text-gray-700 space-y-1 pl-3">
            <li>• Deposit before work begins</li>
            <li>• Milestone payments during project</li>
            <li>• Final payment upon completion</li>
          </ul>
          <p class="text-xs md:text-sm text-gray-700 mt-2">
            Late payments may incur interest and service suspension. All fees
            are non-refundable unless specified.
          </p>
        </section>

        <!-- Project Timeline -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Project Timeline
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            Timelines are estimates. Actual completion may vary based on
            complexity, feedback cycles, and technical challenges. Scope changes
            require change orders with adjusted timelines and costs.
          </p>
        </section>

        <!-- Warranties -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Warranties and Disclaimers
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            We warrant professional, workmanlike service. We disclaim all other
            warranties, including merchantability and fitness for purpose.
            Software is not warranted error-free.
          </p>
        </section>

        <!-- Limitation of Liability -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Limitation of Liability
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            Our liability is limited to fees paid in the 12 months preceding the
            claim. We are not liable for indirect, incidental, special,
            consequential, or punitive damages.
          </p>
        </section>

        <!-- Confidentiality -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Confidentiality
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            Both parties maintain confidentiality of proprietary information.
            This obligation survives termination.
          </p>
        </section>

        <!-- Termination -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Termination
          </h2>
          <p class="text-sm md:text-base text-gray-700 mb-2">
            Either party may terminate with written notice. Upon termination:
          </p>
          <ul class="text-xs md:text-sm text-gray-700 space-y-1 pl-3">
            <li>• Pay for services performed</li>
            <li>• Deliver work product upon payment</li>
            <li>• Return/destroy confidential information</li>
            <li>• IP, confidentiality, and liability provisions survive</li>
          </ul>
        </section>

        <!-- Indemnification -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Indemnification
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            You indemnify us against claims arising from your use of
            deliverables, breach of Terms, violation of laws, or materials that
            infringe third-party IP rights.
          </p>
        </section>

        <!-- Dispute Resolution -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/30 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Dispute Resolution
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            Disputes first addressed through negotiation. If unresolved in 30
            days, mediation in Cotonou, Benin.
          </p>
        </section>

        <!-- Governing Law -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Governing Law
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            These Terms are governed by the laws of the Republic of Benin,
            without regard to conflict of law principles.
          </p>
        </section>

        <!-- Force Majeure -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Force Majeure
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            Neither party is liable for delays from circumstances beyond
            reasonable control, including natural disasters, war, terrorism,
            government actions, labor disputes, or service interruptions.
          </p>
        </section>

        <!-- Independent Contractor -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Independent Contractor
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            We are an independent contractor. Neither party has authority to
            bind the other or create obligations on behalf of the other.
          </p>
        </section>

        <!-- Entire Agreement -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Entire Agreement
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            These Terms and project agreements constitute the entire agreement.
            Modifications require written agreement from both parties.
          </p>
        </section>

        <!-- Severability -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Severability
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            If any provision is unenforceable, it will be limited or eliminated
            to the minimum extent necessary, and remaining provisions stay in
            effect.
          </p>
        </section>

        <!-- Waiver -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Waiver
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            Failure to enforce any right or provision does not constitute a
            waiver of that right or provision.
          </p>
        </section>

        <!-- Assignment -->
        <section
          class="p-6 rounded-lg border border-gray-200 hover:bg-gray-50/20 transition-colors duration-200 h-fit"
        >
          <h2
            class="text-lg md:text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200"
          >
            Assignment
          </h2>
          <p class="text-sm md:text-base text-gray-700">
            You may not assign these Terms without our prior written consent. We
            may assign them in connection with a merger, acquisition, or asset
            sale with notice to you.
          </p>
        </section>
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
          <div
            class="mt-4 p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200"
          >
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
// Composant Terms of Service minimaliste sans couleurs de fond
</script>
