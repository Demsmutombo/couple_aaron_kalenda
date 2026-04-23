<script setup>
import { siteContent } from '@/content'
import { usePublicUrl } from '@/composables/usePublicUrl.js'
</script>

<template>
  <section id="family" class="bg-white py-16 dark:bg-slate-950 lg:py-20">
    <div class="mx-auto max-w-7xl px-4 pt-8 pb-6 lg:px-6">
      <div class="section-title">
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {{ siteContent.family.sectionKicker }}
        </p>
        <h2 class="font-secondary text-4xl text-brand-dark dark:text-slate-100 md:text-5xl">
          {{ siteContent.family.sectionTitle }}
        </h2>
        <i class="far fa-heart mt-2 text-gold" aria-hidden="true" />
      </div>

      <div
        v-if="siteContent.family.parentsGroom || siteContent.family.parentsBride"
        class="mb-12 grid max-w-4xl gap-8 sm:grid-cols-2 sm:gap-10"
      >
        <div
          v-if="siteContent.family.parentsGroom"
          class="rounded border border-primary/25 bg-secondary/50 p-6 text-center dark:border-primary/30 dark:bg-slate-900/50"
        >
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {{ siteContent.family.parentsGroom.label }}
          </p>
          <p class="text-base font-medium text-brand-dark dark:text-slate-100">
            {{ siteContent.family.parentsGroom.names }}
          </p>
        </div>
        <div
          v-if="siteContent.family.parentsBride"
          class="rounded border border-primary/25 bg-secondary/50 p-6 text-center dark:border-primary/30 dark:bg-slate-900/50"
        >
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {{ siteContent.family.parentsBride.label }}
          </p>
          <p class="text-base font-medium text-brand-dark dark:text-slate-100">
            {{ siteContent.family.parentsBride.names }}
          </p>
        </div>
      </div>

      <div
        v-if="siteContent.family.friendsKicker || siteContent.family.friendsTitle"
        class="section-title mb-8"
      >
        <p
          v-if="siteContent.family.friendsKicker"
          class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
        >
          {{ siteContent.family.friendsKicker }}
        </p>
        <h3
          v-if="siteContent.family.friendsTitle"
          class="font-secondary text-2xl text-brand-dark dark:text-slate-100 md:text-3xl"
        >
          {{ siteContent.family.friendsTitle }}
        </h3>
      </div>

      <!-- Témoins : Israël & Sharon ensemble (une carte) -->
      <div v-if="siteContent.family.witnesses" class="mb-10">
        <h4
          v-if="siteContent.family.witnesses.sectionTitle"
          class="mb-4 text-center text-sm font-semibold uppercase tracking-[0.15em] text-primary"
        >
          {{ siteContent.family.witnesses.sectionTitle }}
        </h4>
        <article
          class="mx-auto max-w-md overflow-hidden shadow-sm dark:shadow-black/35 sm:max-w-lg"
        >
          <div class="relative mb-0">
            <img
              :src="usePublicUrl(`img/${siteContent.family.witnesses.image}`)"
              :alt="siteContent.family.witnesses.title"
              class="h-80 w-full object-cover md:h-[22rem]"
              loading="lazy"
            />
            <div class="bg-secondary p-6 text-center dark:bg-slate-900/80">
              <h4 class="mb-2 text-lg font-semibold text-brand-dark dark:text-slate-100">
                {{ siteContent.family.witnesses.title }}
              </h4>
              <p
                class="text-xs font-semibold uppercase tracking-wide text-brand-dark/70 dark:text-slate-400"
              >
                {{ siteContent.family.witnesses.subtitle }}
              </p>
            </div>
          </div>
        </article>
      </div>

      <!-- Personnes importantes : cartes séparées -->
      <div v-if="siteContent.family.important?.members?.length">
        <h4
          v-if="siteContent.family.important.sectionTitle"
          class="mb-6 text-center text-sm font-semibold uppercase tracking-[0.15em] text-primary"
        >
          {{ siteContent.family.important.sectionTitle }}
        </h4>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <article
            v-for="(m, i) in siteContent.family.important.members"
            :key="`important-${i}-${m.title}`"
            class="overflow-hidden shadow-sm transition-opacity duration-300 dark:shadow-black/35"
          >
            <div class="relative mb-0">
              <img
                :src="usePublicUrl(`img/${m.image}`)"
                :alt="m.title"
                class="h-72 w-full object-cover md:h-80"
                loading="lazy"
              />
              <div class="bg-secondary p-6 text-center dark:bg-slate-900/80">
                <h4 class="mb-2 text-lg font-semibold text-brand-dark dark:text-slate-100">
                  {{ m.title }}
                </h4>
                <p
                  class="text-xs font-semibold uppercase tracking-wide text-brand-dark/70 dark:text-slate-400"
                >
                  {{ m.subtitle }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
