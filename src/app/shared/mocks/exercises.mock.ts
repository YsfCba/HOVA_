import {ExerciseCategory, IExercise} from '../models/program.interface';
const exerciceCategories = ExerciseCategory;


export const mockExercises: {[key: string]: IExercise } = {
  benchPress: {
    name: 'Développé Couché ',
    category: ExerciseCategory.machine,
    muscleGroup: ['pectoral', 'shoulders'],
    repetitions: 8,
    series: 4,
    breakTime: 90,
    time: null,
    detail: 'Le développé couché est un exercice poly-articulaire de force et de musculation qui consiste à soulever et abaisser une barre d\'haltères, développant principalement les pectoraux et les triceps.',
    img: '/assets/img_slide/developpe-couche.gif'
  },
  pectoralPress: {
    name: 'Developpe incline',
    category: ExerciseCategory.machine,
    muscleGroup: ['pectoral', 'shoulders'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: 'Cette machine vous permettra de réaliser des exercices de musculation pour cibler principalement les pectoraux, les triceps, mais également les deltoïdes.',
    img: '/assets/img_slide/developpe-incline-machine-convergente-exercice-musculation.gif'
  },

  
  shoulderPress: {
    name: 'Développé épaules',
    category: ExerciseCategory.machine,
    muscleGroup: ['shoulders', 'biceps'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: 'Le développé épaules est un mouvement de musculation de base qui fait travailler les épaules, plus précisément les faisceaux antérieur et moyen du deltoïde, et indirectement les triceps, les trapèzes, le haut de la poitrine et le dentelé antérieur. L\'exercice se fait à la machine ',
    img: '/assets/img_slide/presse-epaule-exercice-musculation.gif'


  },
  tricepsPulley: {
    name: 'Triceps à la Poulie',
    category: ExerciseCategory.pulley,
    muscleGroup: ['triceps', 'shoulders', 'biceps'],
    repetitions: 12,
    series: 3,
    breakTime: 60,
    time: null,
    detail: '',
    img: '/assets/img_slide/Triceps_Pulley.gif'


  },

  tractionEasyChinDip: {
    name: 'Tractions assistées',
    category: ExerciseCategory.machine,
    muscleGroup: ['back-up', 'shoulders', 'biceps'],
    repetitions: 8,
    series: 4,
    breakTime: 90,
    time: null,
    detail: 'Les tractions assistées se font sur une chaise romaine avec un système d’assistance ou contre poids. Saisissez les poignées et positionnez les pieds ou les genoux sur le contrepoids (selon le type d’appareil). La prise s’appelle communément prise large pronation. Penchez vous légèrement en arrière et tractez votre poids en montant la poitrine vers le haut, sans décoller les pieds (ou les genoux) du contrepoids de la machine',
    img: '/assets/img_slide/traction-assistee-machine.gif'


  },
  lowRow: {
    name: 'Low Row Pulley',
    category: ExerciseCategory.pulley,
    muscleGroup: ['back-middle', 'shoulders', 'triceps', 'biceps'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: 'This easy exercise is excellent for bringing out the details in the middle and center of the back muscles. For this exercise, you will need access to a low pulley row machine with a V-bar handle. The V-bar handle enables you to have a neutral grip where the palms of your hands face each other. ',
    img: '/assets/img_slide/tirage-horizontal-poulie.gif'


  },
  pullDown: {
    name: 'Pull Down Machine',
    category: ExerciseCategory.machine,
    muscleGroup: ['back-up', 'shoulders', 'biceps'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: 'Les lat pulldown ont une amplitude de mouvement similaire aux tractions, cependant, vous pouvez utiliser une forme plus stricte en raison de votre posture assise et ajuster le poids en fonction de votre niveau de force.',
    img: '/assets/img_slide/tirage-vertical-prise-serree.gif'


  },
  bicepsPulley: {
    name: 'Biceps Pulley',
    category: ExerciseCategory.pulley,
    muscleGroup: ['biceps', 'arm'],
    repetitions: 12,
    series: 3,
    breakTime: 60,
    time: null,
    detail: '',
    img: '/assets/img_slide/curl-biceps-poulie-basse.gif'
    

  },

  legPress: {
    name: 'La Presse',
    category: ExerciseCategory.machine,
    muscleGroup: ['quadriceps', 'calves'],
    repetitions: 8,
    series: 4,
    breakTime: 90,
    time: null,
    detail: 'La presse à cuisses est une exercice pour se muscler les jambes et permettant de développer très efficacement la partie avant des cuisses, c’est-à-dire les quadriceps. Exercice simple à réaliser grâce à l’exécution à la presse inclinée, ce mouvements de base pour muscler les quadriceps est aussi accessible à tous.',
    img: '/assets/img_slide/presse-a-cuisse-exercice-musculation.gif'


  },
  legExtension: {
    name: 'Leg Extension Machine',
    category: ExerciseCategory.machine,
    muscleGroup: ['quadriceps-up'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: '',
    img: '/assets/img_slide/leg-extension-exercice-musculation.gif'

  },
  legCurl: {
    name: 'Leg Curl Machine',
    category: ExerciseCategory.machine,
    muscleGroup: ['quadriceps-down'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: 'La machine Leg Curl assise va cibler activement les ischios-jambiers qui sont situés à l’arrière de vos cuisses',
    img: '/assets/img_slide/leg-curl-allonge.gif'


  },
  abdosCrunch: {
    name: 'Abdos Crunch',
    category: ExerciseCategory.machine,
    muscleGroup: ['abs'],
    repetitions: 15,
    series: 3,
    breakTime: 45,
    time: null,
    detail: 'Le crunch est un mouvement idéal pour muscler les abdos car il propose un travail ciblé sans aucun risque de vous faire mal au dos. Ainsi, les exercices « d’abdo crunch » sont conseillés à toutes celles et ceux qui souhaitent muscler leur ventre, du débutant au sportif confirmé. Niveau musculaire, l’exercice de crunch sollicite principalement le grand droit de l’abdomen, muscle situé dans la paroi antérieure de l’abdomen',
    img: '/assets/img_slide/crunch-poulie-haute-exercice-musculation.gif'


  },
  








  
  walkingLunges: {
    name: 'Fente ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['quadriceps', 'buttocks', 'calves'],
    repetitions: 20,
    series: 3,
    breakTime: 60,
    time: null,
    detail: 'Le Lunge, ou fente en français, est un grand classique des séances de sport axées sur les jambes et les fessiers. Cet exercice simple en apparence est très efficace et parfaitement adapté aux débutants ! Nous allons te montrer comment effectuer une fente parfaite',
    img: '/assets/img_slide/fentes-avant-kettlebell.gif'


  },
  run: {
    name: 'Courir ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['leg'],
    repetitions: null,
    series: null,
    breakTime: null,
    time: '15 min',
    detail: '',
    img: '/assets/img_slide/run.jpeg'

  },
  bike: {
    name: 'Vélo ',
    category: ExerciseCategory.machine,
    muscleGroup: ['leg'],
    repetitions: null,
    series: null,
    breakTime: null,
    time: '20 min',
    detail: '',
    img: '/assets/img_slide/bike.png'

  },
  burpees: {
    name: 'burpees ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['full body'],
    repetitions: 30,
    series: null,
    breakTime: null,
    time: null,
    detail: 'Le burpee est un enchaînement de mouvements hyper efficace qui challenge votre force athlétique et votre mental. S\'entraîner à cet exercice, c\'est non seulement le moyen de parfaire votre technique de squat, planche et pompe, mais aussi de développer ses capacités physiques, musculaires et cardio',
    img: '/assets/img_slide/burpee-muscle-sollicites.gif'

  },
  squat: {
    name: 'squat ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['leg'],
    repetitions: 30,
    series: null,
    breakTime: null,
    time: null,
    detail: 'La flexion sur jambes est un mouvement d\'accroupi qui constitue un exercice poly-articulaire de force et de musculation ciblant les muscles de la cuisse et les fessiers. Il sollicite aussi secondairement les mollets, les lombaires et les abdominaux',
    img: '/assets/img_slide/homme-faisant-un-squat-avec-barre.gif'

  },
  JumpingJack: {
    name: 'jumping jack ',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['leg', 'arms'],
    repetitions: 50,
    series: null,
    breakTime: null,
    time: null,
    detail: 'Un jumping jack, également connu sous le nom de saut en étoile et appelé saut à cheval latéral dans l\'armée américaine, est un exercice de saut physique effectué en sautant dans une position avec les jambes',
    img: '/assets/img_slide/jumping-jack.gif'

  },
  PushUps: {
    name: 'Push-ups',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['abd', 'abs'],
    repetitions: 50,
    series: null,
    breakTime: null,
    time: null,
    detail: 'La pompe est un exercice physique de musculation qui sollicite principalement le grand pectoral, le deltoïde et les triceps. Cet exercice est populaire car il peut être pratiqué n\'importe où, ne nécessitant pas de matériel',
    img: '/assets/img_slide/pompe-musculation.gif'

  },
  AbsScissors: {
    name: 'Abs Scissors',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['abs'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: 'L\'exercice abdominal des ciseaux est un mouvement de base qui se concentre sur le travail et le ciblage de vos abdominaux transversaux. C\'est un mouvement axé sur les abdominaux qui consiste à vous allonger sur le dos, à lever les deux jambes du sol, puis à se croiser l\'une sur l\'autre dans un mouvement semblable à celui de ciseaux sans les laisser tomber (oui, ça brûle). Puisque vos jambes bougent tout au long de l\'exercice, cela sert également de mouvement de renforcement du bas du corps',
    img: '/assets/img_slide/ciseaux.gif'

  },
  AbsKickOut: {
    name: 'Abs Kick Out',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['abs'],
    repetitions: 10,
    series: 3,
    breakTime: 60,
    time: null,
    detail: 'Les abdominaux rameur ou kick out sont des exercices d’abdos assis sur le sol ou sur un banc. Technique Assis, jambes pliées, pieds à plat sur le sol : Penchez-vous en arrière et posez vos mains sur les côtés derrière vous pour supporter votre poids sur vos fesses et vos mains Simultanément, décollez les pieds et amenez vos genoux vers votre poitrine (votre dos forme un angle d’environ 45° avec le sol) Tendez vos jambes devant vous sans toucher le sol avec vos pieds Revenez à la position de l’étape 1 en ramenant les genoux vers votre poitrine.',
    img: '/assets/img_slide/Abs Kick Out.jpeg'

  },
  plank: {
    name: 'Plank',
    category: ExerciseCategory.bodyWeight,
    muscleGroup: ['abs'],
    repetitions: null,
    series: 3,
    breakTime: 60,
    time: '60s',
    detail: 'Le gainage fait partie des exercices de musculation de base utilisant le poids corporel, c\'est toute la musculature du corps qui travaille. Des mollets aux épaules et au torse en passant par les cuisses, les fesses, le bas du dos et les abdos.',
    img: '/assets/img_slide/planche-abdos.gif'

  },

};
