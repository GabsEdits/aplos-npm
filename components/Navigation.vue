<template>
  <header v-if="theme.nav.show !== false">
    <a href="#content-main" class="skip-to-content">Skip to main content</a>
    <nav>
      <ul>
        <li id="title">
          <a href="/" @click="setActive('/')">
            {{ site.title }}
          </a>
        </li>
        <li v-for="(navItem, index) in navigation" :key="index">
          <a
            :href="navItem.link"
            :class="{ active: isActive(navItem.link) }"
            @click="setActive(navItem.link)"
          >
            {{ navItem.text }}
          </a>
        </li>
        <li v-if="theme.nav.rss">
          <a
            target="_blank"
            :href="theme.nav.rss"
            aria-label="Link to the RSS Feed"
            title="Link to the RSS Feed"
          >
            <RSSFeed />
          </a>
        </li>
        <li v-if="theme.nav.git">
          <a
            target="_blank"
            :href="theme.nav.git"
            aria-label="Link to the source code of the website"
            title="Link to the source code of the website"
          >
            <SourceCode />
          </a>
        </li>
        <li>
          <select v-model="selectedLanguage" @change="changeLanguage">
            <option v-for="language in languages" :value="language.locale">
              {{ language.name }}
            </option>
          </select>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@mixin blurredBackground {
  -webkit-backdrop-filter: saturate(180%) blur(10px);
  backdrop-filter: saturate(180%) blur(10px);
}

header {
  .skip-to-content {
    clip: rect(1px, 1px, 1px, 1px);
    word-wrap: normal !important;
    -webkit-clip-path: inset(50%);
    position: absolute;
    z-index: 999;
    clip-path: inset(50%);
    margin: -1px;
    border: 0;
    padding: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;

    &:focus {
      clip: auto !important;
      -webkit-clip-path: none;
      position: static;
      clip-path: none;
      margin: 0;
      width: auto;
      height: auto;
      overflow: visible;
    }
  }

  nav {
    @include blurredBackground;
    position: fixed;
    top: 3rem;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    border: 0.4px solid var(--color-border);
    border-radius: 2.5rem;
    background-color: none;
    background-color: var(--color-header);
    padding: 0.0625rem 1.5625rem;
    overflow: hidden;
    text-align: center;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 0;
      min-height: 40px;
      overflow: hidden;
      list-style-type: none;

      li {
        display: inline-block;

        a {
          display: block;
          transform: scale(1);
          transition:
            color 0.7s ease,
            transform 100ms ease;
          margin: 0 0.3125rem;
          color: var(--color-text-secondary);
          font-weight: 600;
          font-size: 14px;
          letter-spacing: -0.015rem;
          text-align: center;
          text-decoration: none;

          &:hover {
            color: var(--color-accent);
          }

          &:active {
            transform: scale(0.9);
            color: var(--color-accent);
          }

          &.active {
            color: var(--color-accent);
          }
        }

        select {
          transform: scale(1);
          transition:
            color 0.7s ease,
            transform 100ms ease;
          margin: 0 0.3125rem;
          color: var(--color-text-secondary);
          font-weight: 600;
          font-size: 14px;
          letter-spacing: -0.015rem;
          text-align: center;
          text-decoration: none;
          background-color: transparent;
          border: 0;
          cursor: pointer;

          &:hover {
            color: var(--color-accent);
          }

          &:active {
            transform: scale(0.9);
            color: var(--color-accent);
          }

          &::after {
            display: none;
          }
        }
      }
    }
  }

  #title {
    position: relative;
    margin-right: 2.1875rem;

    * {
      transform: scale(1);
      transition: transform 100ms ease text-decoration 0.4s ease;
      margin: 0.5rem 0.3125rem 0.5rem 0.3125rem;
      color: var(--color-text);
      font-weight: 800;
      font-size: 16px;
      letter-spacing: -0.0325rem;

      &:hover {
        text-decoration: underline 0.075rem solid var(--color-accent);
      }

      &:active {
        transform: scale(0.9);
      }
    }

    &::after {
      position: absolute;
      top: -0.3125rem;
      right: -1.25rem;
      margin: 0;
      background-color: var(--color-border);
      width: 0.0625rem;
      height: 50px;
      content: "";
    }
  }

  .fa-brands {
    font-size: 15px;
  }
}
</style>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useData } from "vitepress";
import SourceCode from "../icons/SourceCode.vue";
import RSSFeed from "../icons/RSSFeed.vue";

const { site, theme } = useData();

const currentPath = ref("/");
const isActive = (route: string) => currentPath.value === route;
const setActive = (route: string) => {
  currentPath.value = route;
};

onMounted(() => {
  if (typeof window !== "undefined") {
    currentPath.value = window.location.pathname;
  }
});

const navigation = theme.value.nav.links;

const languages = ref(
  theme.value.languages.map((language) => ({
    name: language.name,
    locale: language.locale,
  })),
);
const selectedLanguage = ref(getLanguageFromUrl());

function getLanguageFromUrl() {
  const path = window.location.pathname;
  const language = path.split("/")[1];
  const availableLanguages = languages.value.map((lang) => lang.locale);
  if (availableLanguages.includes(language)) {
    return language;
  } else {
    return languages.value.find((lang) => !lang.locale)?.locale || languages.value[0].locale;
  }
}

const changeLanguage = () => {
  console.log("Language changed to:", selectedLanguage.value);

  if (typeof window !== "undefined") {
    const language = languages.value.find((lang) => lang.locale === selectedLanguage.value);
    if (language && language.locale !== false) {
      window.location.href = `/${selectedLanguage.value}/`;
    } else {
      window.location.href = "/";
    }
  }
};

onMounted(() => {
  if (typeof window !== "undefined") {
    currentPath.value = window.location.pathname;
  }
});
</script>
