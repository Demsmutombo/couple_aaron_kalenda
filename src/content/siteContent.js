/**
 * Contenu du site — Aaron & Hatie
 * Remplacez `placeholder.svg` par vos photos dans `public/img/`.
 */
export const siteContent = {
  meta: {
    title: 'Aaron & Hatie',
    htmlLang: 'fr',
  },

  couple: {
    displayName: 'Aaron & Hatie',
    displayNameAlt: 'Aaron & Hatie',
    navBrandMobile: { line1: 'Aaron', joiner: 'et', line2: 'Hatie' },
    navBrandDesktop: { before: 'Aaron', joiner: 'et', after: 'Hatie' },
    heroTagline: 'Nous nous sommes unis pour toujours',
    heroImpact:
      'Un amour guidé par la foi, construit avec vision, et scellé pour l’éternité.',
  },

  splash: {
    logoCandidates: ['logo.png', 'img/logo.png', 'img/logo.jpg'],
    minVisibleMs: 3000,
  },

  nav: [
    { hash: '#home', label: 'Accueil' },
    { hash: '#about', label: 'À propos' },
    { hash: '#story', label: 'Histoire' },
    { hash: '#gallery', label: 'Galerie' },
    { hash: '#family', label: 'Famille' },
    { hash: '#event', label: 'Événement' },
    { hash: '#rsvp', label: 'Voeux' },
    { hash: '#contact', label: 'Contact' },
  ],

  hero: {
    slides: [
      { image: 'placeholder.svg', alt: 'Aaron & Hatie' },
      { image: 'placeholder.svg', alt: 'Aaron & Hatie' },
    ],
  },

  about: {
    sectionKicker: 'À propos',
    sectionTitle: 'Le Marié & La Mariée',
    groom: {
      title: 'Le Marié',
      html: `Kalenda Kalenda Aaron, affectueusement appelé <strong>«&nbsp;Still Alive&nbsp;»</strong>. Entrepreneur visionnaire et homme de foi, Aaron est animé par une profonde relation avec le Seigneur Jésus-Christ. Passionné par le business, le voyage et l’excellence, il incarne la détermination et l’élégance d’un homme qui construit sa vie avec ambition. Aujourd’hui, il ouvre un nouveau chapitre aux côtés de celle que son cœur a choisie.`,
      signature: 'Kalenda Kalenda Aaron',
      image: 'placeholder.svg',
    },
    bride: {
      title: 'La Mariée',
      html: `Hatie Mbuyi Musasa, désormais <strong class="text-primary">Hatie Mbuyi Kalenda</strong>. Créatrice talentueuse et styliste inspirée, Hatie est une femme passionnée par l’art, la couture et l’innovation. Elle donne vie à ses idées à travers des créations uniques qui reflètent sa sensibilité et son élégance. Femme de vision et de douceur, elle s’engage aujourd’hui dans une union fondée sur l’amour, la foi et le respect.`,
      signature: 'Hatie Mbuyi Kalenda',
      image: 'placeholder.svg',
    },
    videoFile: null,
  },

  story: {
    sectionKicker: 'Histoire',
    sectionTitle: "Notre Histoire d'Amour",
    items: [
      {
        image: 'placeholder.svg',
        imageAlt: 'Première rencontre',
        title: 'Première Rencontre',
        date: '05 août 2024 – King Fried Chicken',
        html: `Dans un cadre simple, presque ordinaire, leurs regards se sont croisés…<br><br>
Ce moment discret est devenu le point de départ d’une histoire extraordinaire. Une connexion naturelle, une complicité naissante… sans savoir que leurs destins venaient de s’unir.`,
        imageSide: 'left',
      },
      {
        image: 'placeholder.svg',
        imageAlt: 'Demande en mariage',
        title: 'Demande en Mariage',
        date: '10 août 2024',
        html: `Quelques jours après leur rencontre, l’évidence s’impose : l’amour est là, pur et sincère. Une promesse est faite… celle de ne jamais se quitter.`,
        imageSide: 'right',
      },
      {
        image: 'placeholder.svg',
        imageAlt: 'Fiançailles',
        title: 'Fiançailles',
        date: '18 octobre 2024',
        html: `Un engagement officiel, marqué par la joie et la certitude d’un avenir commun. Deux cœurs, une vision, un seul chemin.`,
        imageSide: 'left',
      },
    ],
  },

  galleryFilenames: [],

  gallery: {
    sectionKicker: 'Galerie',
    sectionTitle: 'Notre Galerie',
    backgroundImage: 'placeholder.svg',
    subtitle: 'Revivez chaque instant à travers nos souvenirs',
    driveUrl: 'https://drive.google.com/drive/folders/1O0NKRF94Got-iJeHV6OAZV-ZHLhv6F9k',
    driveCtaLabel: 'Photos & vidéos (Google Drive)',
  },

  events: {
    sectionKicker: 'Événement',
    sectionTitle: 'Notre Mariage',
    intro:
      'Chaque étape de notre union a été marquée par l’amour, la tradition et la grâce.',
    items: [
      {
        image: 'placeholder.svg',
        title: 'Présentation Familiale',
        dateLabel: '09 octobre 2025 – Mbujimayi',
        html: `Un moment symbolique où nos familles se sont rencontrées pour sceller notre engagement dans le respect des traditions.`,
        videoUrl: null,
      },
      {
        image: 'placeholder.svg',
        title: 'Remise de la Dot',
        dateLabel: '25 novembre 2025 – Mbujimayi',
        html: `Un acte fort, empreint d’honneur et de valeurs, marquant l’union officielle de nos deux familles.`,
        videoUrl: null,
      },
      {
        image: 'placeholder.svg',
        title: 'Bénédiction Nuptiale',
        dateLabel: '15 janvier 2026 – Grâce Étonnante Tabernacle (Lemba)',
        html: `Sous le regard de Dieu, notre amour a été consacré pour l’éternité, dans la foi et la grâce divine.`,
        videoUrl: null,
      },
      {
        image: 'placeholder.svg',
        title: 'Mariage Civil',
        dateLabel: '17 avril 2026 – Kinshasa (Masina)',
        html: `Devant la loi, nous avons officiellement uni nos vies, marquant le début de notre aventure à deux.`,
        videoUrl: null,
      },
    ],
  },

  family: {
    sectionKicker: 'Famille',
    sectionTitle: 'Nos Familles',
    parentsGroom: {
      label: 'Parents du Marié',
      names: 'Kalenda Simon Pierre & Kajinga Charlotte',
    },
    parentsBride: {
      label: 'Parents de la Mariée',
      names: 'Neville Musasa & Sabwe Celine',
    },
    friendsKicker: 'Amis & proches',
    friendsTitle: 'Témoins et proches',
    /** Témoins : une seule photo / carte pour le couple de témoins */
    witnesses: {
      sectionTitle: 'Témoins',
      image: 'placeholder.svg',
      title: 'Israël Mutombo & Sharon Rose',
      subtitle: 'Témoins',
    },
    /** Personnes importantes : cartes séparées */
    important: {
      sectionTitle: 'Personnes importantes',
      members: [
        {
          image: 'placeholder.svg',
          title: 'Dorcas',
          subtitle: 'Personne importante',
        },
        {
          image: 'placeholder.svg',
          title: 'Mutumishi',
          subtitle: 'Personne importante',
        },
      ],
    },
  },

  rsvp: {
    sectionKicker: 'VOEUX',
    sectionTitle: 'Rejoignez notre célébration',
    intro:
      'Votre présence, vos prières et vos messages comptent énormément pour nous. Nous serions honorés de recevoir vos vœux et bénédictions pour cette nouvelle vie.',
    contactIntro: 'Envoyez vos messages via WhatsApp, téléphone ou e-mail :',
    telHref: 'tel:+243817213228',
    telLabel: '0817 213 228',
    whatsappHref: 'https://api.whatsapp.com/send?phone=243817213228',
    whatsappAriaLabel: 'Nous écrire sur WhatsApp',
    emailHref: 'mailto:kalendasimon093@gmail.com',
    emailLabel: 'E-mail',
  },

  footer: {
    title: '',
    creditLabel: 'Conçu par',
    creditName: 'One Memoria',
    creditUrl: 'https://www.onememoria.com',
    quote: "Where there's a will, there's a way.",
    quotePremium:
      'Quand deux âmes sont déterminées à s’aimer, aucun obstacle ne peut les arrêter.',
    /** WhatsApp One Memoria (agence) — diffère du numéro des mariés (section Voeux) */
    whatsappHref: 'https://api.whatsapp.com/send?phone=243991683269',
    whatsappAriaLabel: 'Contacter One Memoria sur WhatsApp',
    copyrightCoupleHref: 'mailto:kalendasimon093@gmail.com',
    copyrightLabel: 'Aaron & Hatie',
  },

  /**
   * Musique de fond (bouton flottant) : placer le fichier dans public/
   * Ex. public/audio/htmstyle.mpeg → src: 'audio/htmstyle.mpeg'
   */
  music: {
    enabled: true,
    src: 'audio/htmstyle.mpeg',
    titleHover: 'Musique de fond — cliquer pour lire ou mettre en pause',
  },
}
