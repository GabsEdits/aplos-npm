---
pageClass: home
---

# Aplós {.center #title}

O temă și șablon VitePress elegant, contemporan și conceput cu un scop. Oferă o soluție simplă pentru crearea rapidă a unei pagini web, oferind funcții esențiale pentru o scriere confortabilă, menținând în același timp un simț al simplității. {.center #desc}

<section id="features">
<br>

- <span class="emoji">🚀</span> Ușor, minimalistic și prietenos cu utilizatorul, construit pentru VitePress.
- <span class="emoji">🎨</span> Stilizat elegant cu un temă de culoare primară pentru o experiență plăcută vizual.
- <span class="emoji">📱</span> Design prietenos cu dispozitivele mobile cu suport pentru modul întunecat.
- <span class="emoji">🖋️</span> Folosește fonturi premium: Inter pentru text și Geist Mono pentru fragmente de cod.
- <span class="emoji">💻</span> Dezvoltarea locală ușoară cu integrare NPM/PNPM.
- <span class="emoji">📦</span> Fiecare activ este local, nimic nu este extras de pe internet.
- <span class="emoji">🔧</span> Configurație personalizabilă pentru o atingere personală.
- <span class="emoji">✍️</span> Integrare perfectă pentru bloguri, documentație și site-uri personale.
- <span class="emoji">💬</span> Comentarii alimentate de Giscus și Activitypub/Mastodon, pentru articolele de blog.

</section>

<br>
<aside>

## Nume

'_Aplós_', pronunțat ca `/aplós/` <button class="mono-emoji" @click="playSound">🔊</button> este reprezentarea romanizată a cuvântului grecesc 'Απλός,' care se traduce prin 'Simplu'. Această alegere de nume arată esența proiectului - dedicarea sa de a oferi utilizatorilor o experiență web simplă și modernă. Aplós este centrat în jurul filozofiei de simplitate, având ca scop oferirea unei soluții contemporane și necomplicate pentru crearea de site-uri web.

</aside>

## Instalare

Aplós poate fi acum instalat ușor ca un pachet NPM. Pentru a începe cu Aplós, urmați pur și simplu acești pași:

```bash
npm install aplos
```

Odată ce ați instalat pachetul, va trebui să urmați [Ghidul](/guide/#package) pentru a configura tema.

## Contribuție

Dacă doriți să contribuiți la Aplós, puteți verifica pagina [Contributing](/contributing) din documentație.

## Credite și Mulțumiri

Aplós nu ar fi posibil fără proiectele următoare:

- [Duckquill](https://daudix.codeberg.page/duckquill), de unde am fost inspirat să creez acest proiect (și multe idei sunt de acolo)
- [Hari Rana](https://tesk.page/) pentru feedback și sugestii legate de stil
- [Inter](https://rsms.me/inter/), care este fontul folosit în **toate** aplicațiile _Aeolus_.
- [Geist Mono](https://vercel.com/font), folosit pentru fragmentele de cod.
- [VitePress](https://vitepress.dev), care este folosit pentru a alimenta Aplós.
- Toți cei care au susținut proiectul.

::: details Interesat de călătoria din spatele acestuia?
Verificați blogul pe care l-am făcut despre călătoria în dezvoltarea acestui proiect aici la https://gabs.eu.org/blog/posts/behind-aplós
:::

<script setup lang="ts">
    const playSound = () => {
      const audio = new Audio('https://s3-eu-west-1.amazonaws.com/com.idmgroup.lab.sounds.prod/el/a/d/c/adcf1a902482d8ad5ae10ea7307330e0.mp3');
      audio.play();
    }
</script>