/* ═══════════════════════════════════════════════════════════════
   guicks-i18n.js  — Shared translations for all Guicks apps
   Languages: en, es, fr, he, ar
   RTL langs:  he, ar
═══════════════════════════════════════════════════════════════ */

const GUICKS_I18N = {

  en: {
    // Common
    back: 'guicks',
    save: 'Save',
    cancel: 'Cancel',
    done: 'Done',
    add: 'Add',
    delete: 'Delete',
    close: 'Close',
    edit: 'Edit',
    search: 'Search',
    clear: 'Clear',
    yes: 'Yes',
    no: 'No',
    ok: 'OK',
    create: 'Create',
    copy: 'Copy',
    share: 'Share',
    today: 'Today',
    all: 'All',
    new: 'New',
    dismiss: 'Dismiss',
    set: 'Set',
    accept: 'Accept',
    loading: 'Loading…',
    error: 'Error',
    noResults: 'No results',
    optional: 'optional',
    confirm: 'Confirm',

    // Home (index.html)
    homeTagline: 'Quick tools, zero friction',
    homeSearch: 'Search tools…',
    appNames: {
      qr: 'QR Generator', currency: 'Currency', favorites: 'Favorites',
      converter: 'Converter', weather: 'Weather', lucky: 'Lucky',
      calculator: 'Calculator', stocks: 'Stocks', translate: 'Translate',
      clock: 'Clock', calendar: 'Calendar', shopping: 'Shopping',
      reminders: 'Reminders', notes: 'Notes', settings: 'Settings',
    },
    dockHint: 'Hold an app to drag it into the dock',
    dockEditHint: 'Tap an icon to remove it · Tap elsewhere to finish',
    dockLongPressHint: 'Long press an app to edit dock',

    // Settings
    settingsTitle: '⚙️ Settings',
    settingsAppearance: 'Appearance',
    settingsInterfaceTheme: 'Interface Theme',
    settingsThemeDesc: 'Applied across all Guicks apps',
    settingsThemeLight: '☀️ Light',
    settingsThemeDark: '🌙 Dark',
    settingsThemeAuto: '🔄 Auto',
    settingsLanguage: 'Language',
    settingsLanguageDesc: 'App interface language',
    settingsData: 'Data',
    settingsSaveFile: 'Save Data to File',
    settingsSaveDesc: 'Export a .json backup',
    settingsLoadFile: 'Load Data from File',
    settingsLoadDesc: 'Restore a saved backup',
    settingsReset: 'Reset',
    settingsClearAll: 'Clear All App Data',
    settingsClearDesc: 'Remove all favorites, dock & settings',
    settingsAbout: 'About',
    settingsPrivacy: 'Privacy Policy',
    settingsVersion: 'Version',
    settingsDeveloper: 'Developer',
    settingsInstalledTools: 'Installed Tools',
    settingsAppsAvailable: '{{n}} Apps Available',
    settingsSaved: '✅ Backup saved to file!',
    settingsRestored: '✅ Restored! Reloading…',
    settingsInvalidBackup: '❌ Invalid backup file',
    settingsDragged: 'Drag to the dock!',
    confirmClearTitle: 'Clear All Data?',
    confirmClearMsg: 'This will delete all your favorites, categories, dock layout and settings. This cannot be undone.',
    confirmClearYes: 'Yes, Clear All',
    confirmClearCancel: 'Cancel',
    saveData: 'Save & Load Data',
    saveDataDesc: 'Export all your favorites, dock layout and custom categories to a file — then reload anytime.',
    saveToFile: 'Save to file',
    saveToFileDesc: 'Downloads a .json backup to your device',
    loadFromFile: 'Load from file',
    loadFromFileDesc: 'Restore a previously saved backup',

    // QR Generator
    qrTitle: 'QR Generator',
    qrSub: 'URL · Contact · Email · WiFi · Text',
    qrTypeUrl: 'URL',
    qrTypeContact: 'Contact',
    qrTypeEmail: 'Email',
    qrTypeWifi: 'WiFi',
    qrTypeText: 'Text',
    qrGenerate: 'Generate QR',
    qrDownloadPng: 'PNG',
    qrDownloadSvg: 'SVG',
    qrCopy: 'Copy',
    qrCopied: '✅ Copied!',
    qrPlaceholderUrl: 'https://example.com',
    qrPlaceholderText: 'Coupon code, WiFi password, address…',

    // Currency
    currencyTitle: 'Currency',
    currencySub: 'Live exchange rates',
    currencyFrom: 'From',
    currencyTo: 'To',
    currencySwap: 'Swap',
    currencyUpdated: 'Updated',
    currencyError: 'Failed to load rates',

    // Favorites
    favTitle: 'Favorites',
    favSub: 'Your personal bookmarks',
    favAddUrl: 'Paste a URL — https://example.com',
    favSearchPlaceholder: 'Search favorites…',
    favNewCategory: 'New Category',
    favCategoryName: 'e.g. Recipes, Work, Family…',
    favCreateCategory: 'Create Category',
    favEmptyState: 'No favorites yet\nPaste a URL above to get started',
    favDeleteConfirm: 'Remove this favorite?',

    // Unit Converter
    converterTitle: 'Converter',
    converterSub: 'Length · Weight · Temperature · Volume',

    // Weather
    weatherTitle: 'Weather',
    weatherSub: 'Real-time forecast',
    weatherSearchPlaceholder: 'Search city — London, Tokyo, New York…',
    weatherSavedLocations: 'Saved locations',
    weatherFeelsLike: 'Feels like',
    weatherHumidity: 'Humidity',
    weatherWind: 'Wind',
    weatherPressure: 'Pressure',
    weatherUseLocation: 'Use my location',
    weatherToday: 'Today',
    weatherHourly: 'Hourly',
    weatherDaily: '7-Day',

    // Lucky
    luckyTitle: 'Lucky',
    luckySub: 'Dice · Wheel · Coin · Number',
    luckyAddEntry: 'Add a name or option…',
    luckyAddBtn: 'Add',
    luckyClearAll: 'Clear all',
    luckyRoll: 'Roll',
    luckySpin: 'Spin',
    luckyFlip: 'Flip',
    luckyGenerate: 'Generate',

    // Calculator
    calcTitle: 'Calculator',
    calcSub: 'Simple · Scientific · Advanced',
    calcSimple: 'Simple',
    calcScientific: 'Scientific',
    calcAdvanced: 'Advanced',
    calcSolveEq: 'Solve Equation',
    calcCompute: 'Compute',
    calcEqPlaceholder: 'e.g.  x^2 - 5*x + 6 = 0',

    // Stocks
    stocksTitle: 'Stocks',
    stocksSub: 'Real-time market data',
    stocksSearchPlaceholder: 'Search stocks — AAPL, Tesla, Microsoft…',
    stocksApiKey: 'API Key',
    stocksSaveKey: 'Save Key',
    stocksChange: 'Change',
    stocksHigh: 'High',
    stocksLow: 'Low',
    stocksVolume: 'Volume',

    // Translate
    translateTitle: 'Translate',
    translateSub: '100+ languages',
    translatePlaceholder: 'Type or paste text here…',
    translateFrom: 'From',
    translateTo: 'To',
    translateSwap: 'Swap',
    translateCopy: 'Copy',
    translateSpeak: 'Speak',

    // Clock
    clockTitle: 'Clock',
    clockSub: 'World time · Alarms',
    clockTabClock: '🕐 Clock',
    clockTabWorld: '🌍 World',
    clockTabAlarms: '⏰ Alarms',
    clockAddCity: 'Add',
    clockAddCityPlaceholder: '— Add a city —',
    clockAlarmTime: 'Set alarm time',
    clockAlarmLabel: 'Label (optional)',
    clockAlarmSet: 'Set',
    clockAlarmDismiss: 'Dismiss',
    clockAlarmNote: '⚠️ Alarms ring only while this browser tab is open',
    clockNoCities: 'No cities yet — add one above',
    clockNoAlarms: 'No alarms set yet',

    // Calendar
    calTitle: 'Calendar',
    calSub: 'Your events, all in one place',
    calYear: 'Year',
    calMonth: 'Month',
    calWeek: 'Week',
    calDay: 'Day',
    calToday: 'Today',
    calNewEvent: 'New Event',
    calEditEvent: 'Edit Event',
    calEventTitle: 'Title',
    calEventDate: 'Date',
    calEventAllDay: 'All day',
    calEventStart: 'Start',
    calEventEnd: 'End',
    calEventNotes: 'Notes',
    calEventCategory: 'Category',
    calEventTitlePlaceholder: 'Event name…',
    calEventNotesPlaceholder: 'Optional notes…',
    calCategoryName: 'Category name…',
    calNoEvents: 'No events this day',
    calAddEvent: '+ Add event',
    calCategories: 'Categories',
    calNewCategory: 'New Category',
    calAllDay: 'All day',
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    monthsShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],

    // Shopping
    shoppingTitle: 'Shopping List',
    shoppingSub: 'Your list is empty',
    shoppingPlaceholder: 'Add item…',
    shoppingClearDone: 'Clear done',
    shoppingDone: 'done',
    shoppingLeft: 'left',
    shoppingNoItems: 'Your list is empty\nAdd items above',
    shoppingNoSection: 'No items in',
    sections: {
      produce: 'Produce', dairy: 'Dairy', meat: 'Meat', bakery: 'Bakery',
      frozen: 'Frozen', drinks: 'Drinks', snacks: 'Snacks', cleaning: 'Cleaning',
      personal: 'Personal', pantry: 'Pantry', other: 'Other',
    },

    // Reminders
    remTitle: 'Reminders',
    remSub: 'Nothing here yet',
    remPlaceholder: 'Add reminder…',
    remNewTag: 'New tag…',
    remClearDone: 'Clear done',
    remDone: 'done',
    remLeft: 'left',
    remNoItems: 'No reminders yet\nAdd one above',
    remNoTag: 'Nothing tagged',
    remCreateTag: '+ Create',
    remNewTagPlaceholder: 'New tag name…',
    remTagExists: 'Tag already exists',
    remEnterTag: 'Enter a tag name',
    remTagInUse: 'reminders use this tag',
    remCleared: 'Cleared',
    remAlreadyEmpty: 'Already empty',

    // Notes
    notesTitle: 'Notes',
    notesSub: 'No notes yet',
    notesSearchPlaceholder: 'Search notes…',
    notesTitlePlaceholder: 'Title…',
    notesBodyPlaceholder: 'Start writing…',
    notesNewTagPlaceholder: 'New tag name…',
    notesAddTag: '+ tag',
    notesManageTags: '# tags',
    notesNewNote: 'New note',
    notesDeleteConfirm: 'Delete this note?',
    notesNoteDeleted: '🗑 Note deleted',
    notesCopied: '📋 Copied to clipboard',
    notesNoNotes: 'No notes yet\nTap + to create one',
    notesNoMatch: 'No matching notes',
    notesManageTagsTitle: 'Manage Tags',
    notesTagExists: 'Tag already exists',
    notesNoTags: 'No tags yet',
    notesTagInUse: 'notes use this tag',
    notesChars: 'chars',
    notesNoTag: 'No tags',
    notesUntagged: 'Untagged',
    notesCopyUnavail: 'Copy not available',
  },

  es: {
    back: 'guicks',
    save: 'Guardar',
    cancel: 'Cancelar',
    done: 'Listo',
    add: 'Agregar',
    delete: 'Eliminar',
    close: 'Cerrar',
    edit: 'Editar',
    search: 'Buscar',
    clear: 'Limpiar',
    yes: 'Sí',
    no: 'No',
    ok: 'OK',
    create: 'Crear',
    copy: 'Copiar',
    share: 'Compartir',
    today: 'Hoy',
    all: 'Todo',
    new: 'Nuevo',
    dismiss: 'Cerrar',
    set: 'Activar',
    accept: 'Aceptar',
    loading: 'Cargando…',
    error: 'Error',
    noResults: 'Sin resultados',
    optional: 'opcional',
    confirm: 'Confirmar',

    homeTagline: 'Herramientas rápidas, sin fricciones',
    homeSearch: 'Buscar herramientas…',
    appNames: {
      qr: 'Código QR', currency: 'Moneda', favorites: 'Favoritos',
      converter: 'Conversor', weather: 'Tiempo', lucky: 'Suerte',
      calculator: 'Calculadora', stocks: 'Bolsa', translate: 'Traducir',
      clock: 'Reloj', calendar: 'Calendario', shopping: 'Compras',
      reminders: 'Recordatorios', notes: 'Notas', settings: 'Ajustes',
    },
    dockHint: 'Mantén una app para arrastrarla al dock',
    dockEditHint: 'Toca un icono para eliminarlo · Toca fuera para terminar',
    dockLongPressHint: 'Mantén una app para editar el dock',

    settingsTitle: '⚙️ Ajustes',
    settingsAppearance: 'Apariencia',
    settingsInterfaceTheme: 'Tema de interfaz',
    settingsThemeDesc: 'Aplicado en todas las apps de Guicks',
    settingsThemeLight: '☀️ Claro',
    settingsThemeDark: '🌙 Oscuro',
    settingsThemeAuto: '🔄 Auto',
    settingsLanguage: 'Idioma',
    settingsLanguageDesc: 'Idioma de la interfaz',
    settingsData: 'Datos',
    settingsSaveFile: 'Guardar datos en archivo',
    settingsSaveDesc: 'Exportar copia de seguridad .json',
    settingsLoadFile: 'Cargar datos desde archivo',
    settingsLoadDesc: 'Restaurar una copia guardada',
    settingsReset: 'Restablecer',
    settingsClearAll: 'Borrar todos los datos',
    settingsClearDesc: 'Eliminar favoritos, dock y ajustes',
    settingsAbout: 'Acerca de',
    settingsPrivacy: 'Política de privacidad',
    settingsVersion: 'Versión',
    settingsDeveloper: 'Desarrollador',
    settingsInstalledTools: 'Herramientas instaladas',
    settingsAppsAvailable: '{{n}} apps disponibles',
    settingsSaved: '✅ Copia guardada en archivo',
    settingsRestored: '✅ Restaurado. Recargando…',
    settingsInvalidBackup: '❌ Archivo de copia inválido',
    settingsDragged: '¡Arrastra al dock!',
    confirmClearTitle: '¿Borrar todos los datos?',
    confirmClearMsg: 'Esto eliminará todos tus favoritos, categorías, dock y ajustes. No se puede deshacer.',
    confirmClearYes: 'Sí, borrar todo',
    confirmClearCancel: 'Cancelar',
    saveData: 'Guardar y cargar datos',
    saveDataDesc: 'Exporta todos tus favoritos, dock y categorías a un archivo.',
    saveToFile: 'Guardar en archivo',
    saveToFileDesc: 'Descarga una copia .json en tu dispositivo',
    loadFromFile: 'Cargar desde archivo',
    loadFromFileDesc: 'Restaurar una copia guardada anteriormente',

    qrTitle: 'Código QR', qrSub: 'URL · Contacto · Email · WiFi · Texto',
    qrGenerate: 'Generar QR', qrDownloadPng: 'PNG', qrDownloadSvg: 'SVG',
    qrCopy: 'Copiar', qrCopied: '✅ ¡Copiado!',
    qrPlaceholderUrl: 'https://ejemplo.com', qrPlaceholderText: 'Código, contraseña WiFi, dirección…',

    currencyTitle: 'Moneda', currencySub: 'Tipos de cambio en vivo',
    currencyFrom: 'De', currencyTo: 'A', currencySwap: 'Intercambiar',
    currencyUpdated: 'Actualizado', currencyError: 'Error al cargar tasas',

    favTitle: 'Favoritos', favSub: 'Tus marcadores personales',
    favAddUrl: 'Pega una URL — https://ejemplo.com',
    favSearchPlaceholder: 'Buscar favoritos…',
    favNewCategory: 'Nueva categoría',
    favCategoryName: 'p.ej. Recetas, Trabajo, Familia…',
    favCreateCategory: 'Crear categoría',
    favEmptyState: 'Aún no hay favoritos\nPega una URL arriba',
    favDeleteConfirm: '¿Eliminar este favorito?',

    converterTitle: 'Conversor', converterSub: 'Longitud · Peso · Temperatura · Volumen',

    weatherTitle: 'Tiempo', weatherSub: 'Pronóstico en tiempo real',
    weatherSearchPlaceholder: 'Buscar ciudad — Madrid, Buenos Aires…',
    weatherSavedLocations: 'Ubicaciones guardadas',
    weatherFeelsLike: 'Sensación', weatherHumidity: 'Humedad',
    weatherWind: 'Viento', weatherPressure: 'Presión',
    weatherUseLocation: 'Usar mi ubicación',
    weatherToday: 'Hoy', weatherHourly: 'Por horas', weatherDaily: '7 días',

    luckyTitle: 'Suerte', luckySub: 'Dados · Ruleta · Moneda · Número',
    luckyAddEntry: 'Agrega un nombre u opción…', luckyAddBtn: 'Agregar',
    luckyClearAll: 'Borrar todo', luckyRoll: 'Lanzar', luckySpin: 'Girar',
    luckyFlip: 'Lanzar', luckyGenerate: 'Generar',

    calcTitle: 'Calculadora', calcSub: 'Simple · Científica · Avanzada',
    calcSimple: 'Simple', calcScientific: 'Científica', calcAdvanced: 'Avanzada',
    calcSolveEq: 'Resolver ecuación', calcCompute: 'Calcular',
    calcEqPlaceholder: 'p.ej.  x^2 - 5*x + 6 = 0',

    stocksTitle: 'Bolsa', stocksSub: 'Datos de mercado en tiempo real',
    stocksSearchPlaceholder: 'Buscar — AAPL, Tesla, Microsoft…',
    stocksApiKey: 'Clave API', stocksSaveKey: 'Guardar clave',
    stocksChange: 'Cambio', stocksHigh: 'Máx', stocksLow: 'Mín', stocksVolume: 'Volumen',

    translateTitle: 'Traducir', translateSub: 'Más de 100 idiomas',
    translatePlaceholder: 'Escribe o pega texto aquí…',
    translateFrom: 'Desde', translateTo: 'A', translateSwap: 'Intercambiar',
    translateCopy: 'Copiar', translateSpeak: 'Hablar',

    clockTitle: 'Reloj', clockSub: 'Hora mundial · Alarmas',
    clockTabClock: '🕐 Reloj', clockTabWorld: '🌍 Mundial', clockTabAlarms: '⏰ Alarmas',
    clockAddCity: 'Agregar', clockAddCityPlaceholder: '— Agregar ciudad —',
    clockAlarmTime: 'Hora de alarma', clockAlarmLabel: 'Etiqueta (opcional)',
    clockAlarmSet: 'Activar', clockAlarmDismiss: 'Cerrar',
    clockAlarmNote: '⚠️ Las alarmas suenan solo mientras esta pestaña esté abierta',
    clockNoCities: 'Ninguna ciudad — agrega una arriba',
    clockNoAlarms: 'Sin alarmas configuradas',

    calTitle: 'Calendario', calSub: 'Todos tus eventos en un lugar',
    calYear: 'Año', calMonth: 'Mes', calWeek: 'Semana', calDay: 'Día',
    calToday: 'Hoy', calNewEvent: 'Nuevo evento', calEditEvent: 'Editar evento',
    calEventTitle: 'Título', calEventDate: 'Fecha', calEventAllDay: 'Todo el día',
    calEventStart: 'Inicio', calEventEnd: 'Fin', calEventNotes: 'Notas',
    calEventCategory: 'Categoría', calEventTitlePlaceholder: 'Nombre del evento…',
    calEventNotesPlaceholder: 'Notas opcionales…', calCategoryName: 'Nombre de categoría…',
    calNoEvents: 'Sin eventos este día', calAddEvent: '+ Agregar evento',
    calCategories: 'Categorías', calNewCategory: 'Nueva categoría', calAllDay: 'Todo el día',
    months: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    monthsShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
    days: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],

    shoppingTitle: 'Lista de compras', shoppingSub: 'Tu lista está vacía',
    shoppingPlaceholder: 'Agregar artículo…',
    shoppingClearDone: 'Borrar completados',
    shoppingDone: 'completados', shoppingLeft: 'pendientes',
    shoppingNoItems: 'Tu lista está vacía\nAgrega artículos arriba',
    shoppingNoSection: 'Sin artículos en',
    sections: {
      produce: 'Frutas y verduras', dairy: 'Lácteos', meat: 'Carnes', bakery: 'Panadería',
      frozen: 'Congelados', drinks: 'Bebidas', snacks: 'Snacks', cleaning: 'Limpieza',
      personal: 'Personal', pantry: 'Despensa', other: 'Otros',
    },

    remTitle: 'Recordatorios', remSub: 'Nada aquí todavía',
    remPlaceholder: 'Agregar recordatorio…', remNewTag: 'Nueva etiqueta…',
    remClearDone: 'Borrar completados', remDone: 'completados', remLeft: 'pendientes',
    remNoItems: 'Aún no hay recordatorios\nAgrega uno arriba',
    remNoTag: 'Nada etiquetado como', remCreateTag: '+ Crear',
    remNewTagPlaceholder: 'Nombre de etiqueta…',
    remTagExists: 'La etiqueta ya existe', remEnterTag: 'Ingresa un nombre',
    remTagInUse: 'recordatorios usan esta etiqueta',
    remCleared: 'Eliminados', remAlreadyEmpty: 'Ya está vacío',

    notesTitle: 'Notas', notesSub: 'Sin notas todavía',
    notesSearchPlaceholder: 'Buscar notas…', notesTitlePlaceholder: 'Título…',
    notesBodyPlaceholder: 'Empieza a escribir…', notesNewTagPlaceholder: 'Nombre de etiqueta…',
    notesAddTag: '+ etiqueta', notesManageTags: '# etiquetas',
    notesNewNote: 'Nueva nota', notesDeleteConfirm: '¿Eliminar esta nota?',
    notesNoteDeleted: '🗑 Nota eliminada', notesCopied: '📋 Copiado',
    notesNoNotes: 'Sin notas todavía\nToca + para crear una',
    notesNoMatch: 'Sin notas coincidentes',
    notesManageTagsTitle: 'Gestionar etiquetas',
    notesTagExists: 'La etiqueta ya existe', notesNoTags: 'Sin etiquetas todavía',
    notesTagInUse: 'notas usan esta etiqueta',
    notesChars: 'caract.', notesNoTag: 'Sin etiquetas', notesUntagged: 'Sin etiquetar',
    notesCopyUnavail: 'Copiar no disponible',
  },

  fr: {
    back: 'guicks',
    save: 'Enregistrer', cancel: 'Annuler', done: 'Terminé', add: 'Ajouter',
    delete: 'Supprimer', close: 'Fermer', edit: 'Modifier', search: 'Rechercher',
    clear: 'Effacer', yes: 'Oui', no: 'Non', ok: 'OK', create: 'Créer',
    copy: 'Copier', share: 'Partager', today: "Aujourd'hui", all: 'Tout',
    new: 'Nouveau', dismiss: 'Fermer', set: 'Activer', accept: 'Accepter',
    loading: 'Chargement…', error: 'Erreur', noResults: 'Aucun résultat',
    optional: 'facultatif', confirm: 'Confirmer',

    homeTagline: 'Outils rapides, sans friction',
    homeSearch: 'Rechercher des outils…',
    appNames: {
      qr: 'QR Code', currency: 'Devises', favorites: 'Favoris',
      converter: 'Convertisseur', weather: 'Météo', lucky: 'Chance',
      calculator: 'Calculatrice', stocks: 'Bourse', translate: 'Traduire',
      clock: 'Horloge', calendar: 'Calendrier', shopping: 'Courses',
      reminders: 'Rappels', notes: 'Notes', settings: 'Réglages',
    },
    dockHint: 'Maintenez une app pour la glisser dans le dock',
    dockEditHint: 'Touchez une icône pour la retirer · Touchez ailleurs pour finir',
    dockLongPressHint: 'Maintenez une app pour modifier le dock',

    settingsTitle: '⚙️ Réglages',
    settingsAppearance: 'Apparence',
    settingsInterfaceTheme: "Thème de l'interface",
    settingsThemeDesc: 'Appliqué à toutes les apps Guicks',
    settingsThemeLight: '☀️ Clair', settingsThemeDark: '🌙 Sombre', settingsThemeAuto: '🔄 Auto',
    settingsLanguage: 'Langue', settingsLanguageDesc: "Langue de l'interface",
    settingsData: 'Données',
    settingsSaveFile: 'Sauvegarder dans un fichier',
    settingsSaveDesc: 'Exporter une sauvegarde .json',
    settingsLoadFile: 'Charger depuis un fichier',
    settingsLoadDesc: 'Restaurer une sauvegarde',
    settingsReset: 'Réinitialiser',
    settingsClearAll: 'Effacer toutes les données',
    settingsClearDesc: 'Supprimer favoris, dock et réglages',
    settingsAbout: 'À propos',
    settingsPrivacy: 'Politique de confidentialité',
    settingsVersion: 'Version', settingsDeveloper: 'Développeur',
    settingsInstalledTools: 'Outils installés',
    settingsAppsAvailable: '{{n}} apps disponibles',
    settingsSaved: '✅ Sauvegarde enregistrée',
    settingsRestored: '✅ Restauré. Rechargement…',
    settingsInvalidBackup: '❌ Fichier de sauvegarde invalide',
    settingsDragged: 'Glissez dans le dock !',
    confirmClearTitle: 'Effacer toutes les données ?',
    confirmClearMsg: 'Cela supprimera tous vos favoris, catégories, dock et réglages. Irréversible.',
    confirmClearYes: 'Oui, tout effacer', confirmClearCancel: 'Annuler',
    saveData: 'Sauvegarder et charger',
    saveDataDesc: 'Exportez tous vos favoris, dock et catégories dans un fichier.',
    saveToFile: 'Sauvegarder', saveToFileDesc: 'Télécharge une sauvegarde .json',
    loadFromFile: 'Charger', loadFromFileDesc: 'Restaurer une sauvegarde précédente',

    qrTitle: 'QR Code', qrSub: 'URL · Contact · Email · WiFi · Texte',
    qrGenerate: 'Générer QR', qrDownloadPng: 'PNG', qrDownloadSvg: 'SVG',
    qrCopy: 'Copier', qrCopied: '✅ Copié !',
    qrPlaceholderUrl: 'https://exemple.fr', qrPlaceholderText: 'Code, mot de passe WiFi, adresse…',

    currencyTitle: 'Devises', currencySub: 'Taux de change en direct',
    currencyFrom: 'De', currencyTo: 'Vers', currencySwap: 'Échanger',
    currencyUpdated: 'Mis à jour', currencyError: 'Erreur de chargement',

    favTitle: 'Favoris', favSub: 'Vos marque-pages',
    favAddUrl: 'Collez une URL — https://exemple.fr',
    favSearchPlaceholder: 'Rechercher des favoris…',
    favNewCategory: 'Nouvelle catégorie',
    favCategoryName: 'ex. Recettes, Travail, Famille…',
    favCreateCategory: 'Créer la catégorie',
    favEmptyState: 'Aucun favori\nCollez une URL ci-dessus',
    favDeleteConfirm: 'Supprimer ce favori ?',

    converterTitle: 'Convertisseur', converterSub: 'Longueur · Poids · Température · Volume',

    weatherTitle: 'Météo', weatherSub: 'Prévisions en temps réel',
    weatherSearchPlaceholder: 'Rechercher — Paris, Lyon, Marseille…',
    weatherSavedLocations: 'Lieux enregistrés',
    weatherFeelsLike: 'Ressenti', weatherHumidity: 'Humidité',
    weatherWind: 'Vent', weatherPressure: 'Pression',
    weatherUseLocation: 'Ma position',
    weatherToday: "Aujourd'hui", weatherHourly: 'Heure par heure', weatherDaily: '7 jours',

    luckyTitle: 'Chance', luckySub: 'Dés · Roue · Pièce · Nombre',
    luckyAddEntry: 'Ajoutez un nom ou une option…', luckyAddBtn: 'Ajouter',
    luckyClearAll: 'Tout effacer', luckyRoll: 'Lancer', luckySpin: 'Tourner',
    luckyFlip: 'Lancer', luckyGenerate: 'Générer',

    calcTitle: 'Calculatrice', calcSub: 'Simple · Scientifique · Avancée',
    calcSimple: 'Simple', calcScientific: 'Scientifique', calcAdvanced: 'Avancée',
    calcSolveEq: 'Résoudre', calcCompute: 'Calculer',
    calcEqPlaceholder: 'ex.  x^2 - 5*x + 6 = 0',

    stocksTitle: 'Bourse', stocksSub: 'Données de marché en direct',
    stocksSearchPlaceholder: 'Rechercher — AAPL, Tesla, Microsoft…',
    stocksApiKey: 'Clé API', stocksSaveKey: 'Enregistrer la clé',
    stocksChange: 'Variation', stocksHigh: 'Haut', stocksLow: 'Bas', stocksVolume: 'Volume',

    translateTitle: 'Traduire', translateSub: 'Plus de 100 langues',
    translatePlaceholder: 'Saisissez ou collez du texte…',
    translateFrom: 'Depuis', translateTo: 'Vers', translateSwap: 'Échanger',
    translateCopy: 'Copier', translateSpeak: 'Lire',

    clockTitle: 'Horloge', clockSub: 'Heure mondiale · Alarmes',
    clockTabClock: '🕐 Horloge', clockTabWorld: '🌍 Monde', clockTabAlarms: '⏰ Alarmes',
    clockAddCity: 'Ajouter', clockAddCityPlaceholder: '— Ajouter une ville —',
    clockAlarmTime: "Heure d'alarme", clockAlarmLabel: 'Libellé (facultatif)',
    clockAlarmSet: 'Activer', clockAlarmDismiss: 'Fermer',
    clockAlarmNote: "⚠️ Les alarmes sonnent uniquement quand cet onglet est ouvert",
    clockNoCities: 'Aucune ville — ajoutez-en une',
    clockNoAlarms: 'Aucune alarme configurée',

    calTitle: 'Calendrier', calSub: 'Tous vos événements',
    calYear: 'Année', calMonth: 'Mois', calWeek: 'Semaine', calDay: 'Jour',
    calToday: "Aujourd'hui", calNewEvent: 'Nouvel événement', calEditEvent: 'Modifier',
    calEventTitle: 'Titre', calEventDate: 'Date', calEventAllDay: 'Journée entière',
    calEventStart: 'Début', calEventEnd: 'Fin', calEventNotes: 'Notes',
    calEventCategory: 'Catégorie', calEventTitlePlaceholder: "Nom de l'événement…",
    calEventNotesPlaceholder: 'Notes facultatives…', calCategoryName: 'Nom de catégorie…',
    calNoEvents: 'Aucun événement ce jour', calAddEvent: '+ Ajouter',
    calCategories: 'Catégories', calNewCategory: 'Nouvelle catégorie', calAllDay: 'Journée entière',
    months: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthsShort: ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'],
    days: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],

    shoppingTitle: 'Liste de courses', shoppingSub: 'Votre liste est vide',
    shoppingPlaceholder: 'Ajouter un article…',
    shoppingClearDone: 'Effacer terminés',
    shoppingDone: 'terminés', shoppingLeft: 'restants',
    shoppingNoItems: 'Votre liste est vide\nAjoutez des articles ci-dessus',
    shoppingNoSection: 'Aucun article dans',
    sections: {
      produce: 'Fruits & légumes', dairy: 'Produits laitiers', meat: 'Viandes', bakery: 'Boulangerie',
      frozen: 'Surgelés', drinks: 'Boissons', snacks: 'Snacks', cleaning: 'Nettoyage',
      personal: 'Personnel', pantry: 'Garde-manger', other: 'Autres',
    },

    remTitle: 'Rappels', remSub: 'Rien ici pour instant',
    remPlaceholder: 'Ajouter un rappel…', remNewTag: 'Nouvelle étiquette…',
    remClearDone: 'Effacer terminés', remDone: 'terminés', remLeft: 'restants',
    remNoItems: 'Aucun rappel\nAjoutez-en un ci-dessus',
    remNoTag: 'Rien étiqueté', remCreateTag: '+ Créer',
    remNewTagPlaceholder: "Nom de l'étiquette…",
    remTagExists: 'Étiquette existante', remEnterTag: 'Entrez un nom',
    remTagInUse: 'rappels utilisent cette étiquette',
    remCleared: 'Effacés', remAlreadyEmpty: 'Déjà vide',

    notesTitle: 'Notes', notesSub: 'Aucune note',
    notesSearchPlaceholder: 'Rechercher des notes…', notesTitlePlaceholder: 'Titre…',
    notesBodyPlaceholder: 'Commencez à écrire…', notesNewTagPlaceholder: "Nom de l'étiquette…",
    notesAddTag: '+ étiquette', notesManageTags: '# étiquettes',
    notesNewNote: 'Nouvelle note', notesDeleteConfirm: 'Supprimer cette note ?',
    notesNoteDeleted: '🗑 Note supprimée', notesCopied: '📋 Copié',
    notesNoNotes: 'Aucune note\nTouchez + pour créer',
    notesNoMatch: 'Aucune note correspondante',
    notesManageTagsTitle: 'Gérer les étiquettes',
    notesTagExists: 'Étiquette existante', notesNoTags: 'Aucune étiquette',
    notesTagInUse: 'notes utilisent cette étiquette',
    notesChars: 'car.', notesNoTag: 'Sans étiquette', notesUntagged: 'Non étiqueté',
    notesCopyUnavail: 'Copie non disponible',
  },

  he: {
    back: 'guicks',
    save: 'שמור', cancel: 'ביטול', done: 'סיום', add: 'הוסף',
    delete: 'מחק', close: 'סגור', edit: 'ערוך', search: 'חיפוש',
    clear: 'נקה', yes: 'כן', no: 'לא', ok: 'אישור', create: 'צור',
    copy: 'העתק', share: 'שתף', today: 'היום', all: 'הכל',
    new: 'חדש', dismiss: 'סגור', set: 'הגדר', accept: 'אשר',
    loading: 'טוען…', error: 'שגיאה', noResults: 'אין תוצאות',
    optional: 'אופציונלי', confirm: 'אשר',

    homeTagline: 'כלים מהירים, בלי סיבוכים',
    homeSearch: 'חיפוש כלים…',
    appNames: {
      qr: 'קוד QR', currency: 'מטבע', favorites: 'מועדפים',
      converter: 'ממיר', weather: 'מזג אוויר', lucky: 'מזל',
      calculator: 'מחשבון', stocks: 'מניות', translate: 'תרגום',
      clock: 'שעון', calendar: 'לוח שנה', shopping: 'קניות',
      reminders: 'תזכורות', notes: 'הערות', settings: 'הגדרות',
    },
    dockHint: 'החזק אפליקציה כדי לגרור לדוק',
    dockEditHint: 'הקש על סמל להסרה · הקש מחוץ לסיום',
    dockLongPressHint: 'החזק אפליקציה לעריכת הדוק',

    settingsTitle: '⚙️ הגדרות',
    settingsAppearance: 'מראה',
    settingsInterfaceTheme: 'ערכת נושא',
    settingsThemeDesc: 'חל על כל אפליקציות Guicks',
    settingsThemeLight: '☀️ בהיר', settingsThemeDark: '🌙 כהה', settingsThemeAuto: '🔄 אוטו',
    settingsLanguage: 'שפה', settingsLanguageDesc: 'שפת הממשק',
    settingsData: 'נתונים',
    settingsSaveFile: 'שמור נתונים לקובץ',
    settingsSaveDesc: 'ייצוא גיבוי .json',
    settingsLoadFile: 'טען נתונים מקובץ',
    settingsLoadDesc: 'שחזר גיבוי שמור',
    settingsReset: 'איפוס',
    settingsClearAll: 'מחק את כל הנתונים',
    settingsClearDesc: 'הסר מועדפים, דוק והגדרות',
    settingsAbout: 'אודות',
    settingsPrivacy: 'מדיניות פרטיות',
    settingsVersion: 'גרסה', settingsDeveloper: 'מפתח',
    settingsInstalledTools: 'כלים מותקנים',
    settingsAppsAvailable: '{{n}} אפליקציות זמינות',
    settingsSaved: '✅ הגיבוי נשמר בקובץ',
    settingsRestored: '✅ שוחזר! טוען מחדש…',
    settingsInvalidBackup: '❌ קובץ גיבוי לא תקין',
    settingsDragged: 'גרור לדוק!',
    confirmClearTitle: 'למחוק את כל הנתונים?',
    confirmClearMsg: 'פעולה זו תמחק את כל המועדפים, הקטגוריות, הדוק וההגדרות. לא ניתן לבטל.',
    confirmClearYes: 'כן, מחק הכל', confirmClearCancel: 'ביטול',
    saveData: 'שמור וטען נתונים',
    saveDataDesc: 'ייצא את כל המועדפים, הדוק והקטגוריות לקובץ.',
    saveToFile: 'שמור לקובץ', saveToFileDesc: 'מוריד גיבוי .json למכשיר',
    loadFromFile: 'טען מקובץ', loadFromFileDesc: 'שחזר גיבוי שמור',

    qrTitle: 'קוד QR', qrSub: 'URL · איש קשר · Email · WiFi · טקסט',
    qrGenerate: 'צור QR', qrDownloadPng: 'PNG', qrDownloadSvg: 'SVG',
    qrCopy: 'העתק', qrCopied: '✅ הועתק!',
    qrPlaceholderUrl: 'https://example.com', qrPlaceholderText: 'קוד, סיסמת WiFi, כתובת…',

    currencyTitle: 'מטבע', currencySub: 'שערי חליפין בזמן אמת',
    currencyFrom: 'מ', currencyTo: 'ל', currencySwap: 'החלף',
    currencyUpdated: 'עודכן', currencyError: 'שגיאה בטעינת שערים',

    favTitle: 'מועדפים', favSub: 'הסימניות האישיות שלך',
    favAddUrl: 'הדבק URL — https://example.com',
    favSearchPlaceholder: 'חיפוש מועדפים…',
    favNewCategory: 'קטגוריה חדשה',
    favCategoryName: 'לדוג׳ מתכונים, עבודה, משפחה…',
    favCreateCategory: 'צור קטגוריה',
    favEmptyState: 'אין מועדפים עדיין\nהדבק URL למעלה',
    favDeleteConfirm: 'להסיר מועדף זה?',

    converterTitle: 'ממיר', converterSub: 'אורך · משקל · טמפרטורה · נפח',

    weatherTitle: 'מזג אוויר', weatherSub: 'תחזית בזמן אמת',
    weatherSearchPlaceholder: 'חיפוש עיר — תל אביב, ירושלים…',
    weatherSavedLocations: 'מיקומים שמורים',
    weatherFeelsLike: 'מורגש', weatherHumidity: 'לחות',
    weatherWind: 'רוח', weatherPressure: 'לחץ',
    weatherUseLocation: 'השתמש במיקום שלי',
    weatherToday: 'היום', weatherHourly: 'לפי שעות', weatherDaily: '7 ימים',

    luckyTitle: 'מזל', luckySub: 'קוביות · גלגל · מטבע · מספר',
    luckyAddEntry: 'הוסף שם או אפשרות…', luckyAddBtn: 'הוסף',
    luckyClearAll: 'נקה הכל', luckyRoll: 'הטל', luckySpin: 'סובב',
    luckyFlip: 'הטל', luckyGenerate: 'צור',

    calcTitle: 'מחשבון', calcSub: 'פשוט · מדעי · מתקדם',
    calcSimple: 'פשוט', calcScientific: 'מדעי', calcAdvanced: 'מתקדם',
    calcSolveEq: 'פתור משוואה', calcCompute: 'חשב',
    calcEqPlaceholder: 'לדוג׳  x^2 - 5*x + 6 = 0',

    stocksTitle: 'מניות', stocksSub: 'נתוני שוק בזמן אמת',
    stocksSearchPlaceholder: 'חיפוש — AAPL, טסלה, מיקרוסופט…',
    stocksApiKey: 'מפתח API', stocksSaveKey: 'שמור מפתח',
    stocksChange: 'שינוי', stocksHigh: 'גבוה', stocksLow: 'נמוך', stocksVolume: 'נפח',

    translateTitle: 'תרגום', translateSub: 'מעל 100 שפות',
    translatePlaceholder: 'הקלד או הדבק טקסט כאן…',
    translateFrom: 'מ', translateTo: 'ל', translateSwap: 'החלף',
    translateCopy: 'העתק', translateSpeak: 'הקרא',

    clockTitle: 'שעון', clockSub: 'שעון עולמי · אזעקות',
    clockTabClock: '🕐 שעון', clockTabWorld: '🌍 עולמי', clockTabAlarms: '⏰ אזעקות',
    clockAddCity: 'הוסף', clockAddCityPlaceholder: '— הוסף עיר —',
    clockAlarmTime: 'שעת אזעקה', clockAlarmLabel: 'תווית (אופציונלי)',
    clockAlarmSet: 'הגדר', clockAlarmDismiss: 'סגור',
    clockAlarmNote: '⚠️ אזעקות מצלצלות רק כאשר הלשונית פתוחה',
    clockNoCities: 'אין ערים — הוסף אחת למעלה',
    clockNoAlarms: 'אין אזעקות מוגדרות',

    calTitle: 'לוח שנה', calSub: 'כל האירועים שלך',
    calYear: 'שנה', calMonth: 'חודש', calWeek: 'שבוע', calDay: 'יום',
    calToday: 'היום', calNewEvent: 'אירוע חדש', calEditEvent: 'ערוך אירוע',
    calEventTitle: 'כותרת', calEventDate: 'תאריך', calEventAllDay: 'כל היום',
    calEventStart: 'התחלה', calEventEnd: 'סיום', calEventNotes: 'הערות',
    calEventCategory: 'קטגוריה', calEventTitlePlaceholder: 'שם האירוע…',
    calEventNotesPlaceholder: 'הערות אופציונליות…', calCategoryName: 'שם קטגוריה…',
    calNoEvents: 'אין אירועים ביום זה', calAddEvent: '+ הוסף אירוע',
    calCategories: 'קטגוריות', calNewCategory: 'קטגוריה חדשה', calAllDay: 'כל היום',
    months: ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'],
    monthsShort: ['ינו׳','פבר׳','מרץ','אפר׳','מאי','יוני','יולי','אוג׳','ספט׳','אוק׳','נוב׳','דצמ׳'],
    days: ['א׳','ב׳','ג׳','ד׳','ה׳','ו׳','ש׳'],

    shoppingTitle: 'רשימת קניות', shoppingSub: 'הרשימה שלך ריקה',
    shoppingPlaceholder: 'הוסף פריט…',
    shoppingClearDone: 'נקה שהושלמו',
    shoppingDone: 'הושלמו', shoppingLeft: 'נותרו',
    shoppingNoItems: 'הרשימה שלך ריקה\nהוסף פריטים למעלה',
    shoppingNoSection: 'אין פריטים ב',
    sections: {
      produce: 'ירקות ופירות', dairy: 'מוצרי חלב', meat: 'בשר', bakery: 'מאפייה',
      frozen: 'קפוא', drinks: 'משקאות', snacks: 'חטיפים', cleaning: 'ניקיון',
      personal: 'אישי', pantry: 'מזווה', other: 'אחר',
    },

    remTitle: 'תזכורות', remSub: 'אין כלום כאן עדיין',
    remPlaceholder: 'הוסף תזכורת…', remNewTag: 'תג חדש…',
    remClearDone: 'נקה שהושלמו', remDone: 'הושלמו', remLeft: 'נותרו',
    remNoItems: 'אין תזכורות עדיין\nהוסף אחת למעלה',
    remNoTag: 'שום דבר מתויג', remCreateTag: '+ צור',
    remNewTagPlaceholder: 'שם תג…',
    remTagExists: 'התג כבר קיים', remEnterTag: 'הכנס שם תג',
    remTagInUse: 'תזכורות משתמשות בתג זה',
    remCleared: 'נוקה', remAlreadyEmpty: 'כבר ריק',

    notesTitle: 'הערות', notesSub: 'אין הערות עדיין',
    notesSearchPlaceholder: 'חיפוש הערות…', notesTitlePlaceholder: 'כותרת…',
    notesBodyPlaceholder: 'התחל לכתוב…', notesNewTagPlaceholder: 'שם תג…',
    notesAddTag: '+ תג', notesManageTags: '# תגים',
    notesNewNote: 'הערה חדשה', notesDeleteConfirm: 'למחוק הערה זו?',
    notesNoteDeleted: '🗑 ההערה נמחקה', notesCopied: '📋 הועתק',
    notesNoNotes: 'אין הערות עדיין\nהקש + ליצירה',
    notesNoMatch: 'אין הערות תואמות',
    notesManageTagsTitle: 'ניהול תגים',
    notesTagExists: 'התג כבר קיים', notesNoTags: 'אין תגים עדיין',
    notesTagInUse: 'הערות משתמשות בתג זה',
    notesChars: 'תווים', notesNoTag: 'ללא תג', notesUntagged: 'לא מתויג',
    notesCopyUnavail: 'העתקה אינה זמינה',
  },

  ar: {
    back: 'guicks',
    save: 'حفظ', cancel: 'إلغاء', done: 'تم', add: 'إضافة',
    delete: 'حذف', close: 'إغلاق', edit: 'تعديل', search: 'بحث',
    clear: 'مسح', yes: 'نعم', no: 'لا', ok: 'موافق', create: 'إنشاء',
    copy: 'نسخ', share: 'مشاركة', today: 'اليوم', all: 'الكل',
    new: 'جديد', dismiss: 'إغلاق', set: 'تعيين', accept: 'قبول',
    loading: 'جارٍ التحميل…', error: 'خطأ', noResults: 'لا توجد نتائج',
    optional: 'اختياري', confirm: 'تأكيد',

    homeTagline: 'أدوات سريعة، بلا تعقيد',
    homeSearch: 'البحث عن أدوات…',
    appNames: {
      qr: 'QR كود', currency: 'العملات', favorites: 'المفضلة',
      converter: 'المحوّل', weather: 'الطقس', lucky: 'الحظ',
      calculator: 'الحاسبة', stocks: 'الأسهم', translate: 'الترجمة',
      clock: 'الساعة', calendar: 'التقويم', shopping: 'التسوق',
      reminders: 'التذكيرات', notes: 'الملاحظات', settings: 'الإعدادات',
    },
    dockHint: 'اضغط مطولاً على تطبيق لسحبه إلى الـ dock',
    dockEditHint: 'اضغط أيقونة لإزالتها · اضغط خارجها للإنهاء',
    dockLongPressHint: 'اضغط مطولاً لتعديل الـ dock',

    settingsTitle: '⚙️ الإعدادات',
    settingsAppearance: 'المظهر',
    settingsInterfaceTheme: 'سمة الواجهة',
    settingsThemeDesc: 'يُطبَّق على جميع تطبيقات Guicks',
    settingsThemeLight: '☀️ فاتح', settingsThemeDark: '🌙 داكن', settingsThemeAuto: '🔄 تلقائي',
    settingsLanguage: 'اللغة', settingsLanguageDesc: 'لغة الواجهة',
    settingsData: 'البيانات',
    settingsSaveFile: 'حفظ البيانات في ملف',
    settingsSaveDesc: 'تصدير نسخة احتياطية .json',
    settingsLoadFile: 'تحميل البيانات من ملف',
    settingsLoadDesc: 'استعادة نسخة احتياطية',
    settingsReset: 'إعادة ضبط',
    settingsClearAll: 'مسح جميع البيانات',
    settingsClearDesc: 'حذف المفضلة والـ dock والإعدادات',
    settingsAbout: 'حول',
    settingsPrivacy: 'سياسة الخصوصية',
    settingsVersion: 'الإصدار', settingsDeveloper: 'المطوّر',
    settingsInstalledTools: 'الأدوات المثبتة',
    settingsAppsAvailable: '{{n}} تطبيقات متاحة',
    settingsSaved: '✅ تم حفظ النسخة الاحتياطية',
    settingsRestored: '✅ تمت الاستعادة! جارٍ إعادة التحميل…',
    settingsInvalidBackup: '❌ ملف النسخة الاحتياطية غير صالح',
    settingsDragged: 'اسحب إلى الـ dock!',
    confirmClearTitle: 'مسح جميع البيانات؟',
    confirmClearMsg: 'سيؤدي هذا إلى حذف جميع المفضلة والفئات والـ dock والإعدادات. لا يمكن التراجع.',
    confirmClearYes: 'نعم، امسح الكل', confirmClearCancel: 'إلغاء',
    saveData: 'حفظ البيانات وتحميلها',
    saveDataDesc: 'صدّر جميع مفضلاتك والـ dock والفئات إلى ملف.',
    saveToFile: 'حفظ في ملف', saveToFileDesc: 'تنزيل نسخة احتياطية .json',
    loadFromFile: 'تحميل من ملف', loadFromFileDesc: 'استعادة نسخة احتياطية سابقة',

    qrTitle: 'QR كود', qrSub: 'URL · جهة اتصال · Email · WiFi · نص',
    qrGenerate: 'إنشاء QR', qrDownloadPng: 'PNG', qrDownloadSvg: 'SVG',
    qrCopy: 'نسخ', qrCopied: '✅ تم النسخ!',
    qrPlaceholderUrl: 'https://example.com', qrPlaceholderText: 'رمز، كلمة مرور WiFi، عنوان…',

    currencyTitle: 'العملات', currencySub: 'أسعار صرف مباشرة',
    currencyFrom: 'من', currencyTo: 'إلى', currencySwap: 'تبديل',
    currencyUpdated: 'محدَّث', currencyError: 'فشل تحميل الأسعار',

    favTitle: 'المفضلة', favSub: 'إشاراتك المرجعية',
    favAddUrl: 'الصق URL — https://example.com',
    favSearchPlaceholder: 'البحث في المفضلة…',
    favNewCategory: 'فئة جديدة',
    favCategoryName: 'مثل: وصفات، عمل، عائلة…',
    favCreateCategory: 'إنشاء فئة',
    favEmptyState: 'لا توجد مفضلة بعد\nالصق URL أعلاه',
    favDeleteConfirm: 'إزالة هذا المفضل؟',

    converterTitle: 'المحوّل', converterSub: 'طول · وزن · درجة حرارة · حجم',

    weatherTitle: 'الطقس', weatherSub: 'توقعات في الوقت الفعلي',
    weatherSearchPlaceholder: 'البحث عن مدينة — القاهرة، دبي، الرياض…',
    weatherSavedLocations: 'المواقع المحفوظة',
    weatherFeelsLike: 'يبدو', weatherHumidity: 'الرطوبة',
    weatherWind: 'الرياح', weatherPressure: 'الضغط',
    weatherUseLocation: 'استخدام موقعي',
    weatherToday: 'اليوم', weatherHourly: 'بالساعة', weatherDaily: '7 أيام',

    luckyTitle: 'الحظ', luckySub: 'نرد · عجلة · عملة · رقم',
    luckyAddEntry: 'أضف اسماً أو خياراً…', luckyAddBtn: 'إضافة',
    luckyClearAll: 'مسح الكل', luckyRoll: 'رمي', luckySpin: 'تدوير',
    luckyFlip: 'رمي', luckyGenerate: 'توليد',

    calcTitle: 'الحاسبة', calcSub: 'بسيطة · علمية · متقدمة',
    calcSimple: 'بسيطة', calcScientific: 'علمية', calcAdvanced: 'متقدمة',
    calcSolveEq: 'حل معادلة', calcCompute: 'احسب',
    calcEqPlaceholder: 'مثل:  x^2 - 5*x + 6 = 0',

    stocksTitle: 'الأسهم', stocksSub: 'بيانات السوق المباشرة',
    stocksSearchPlaceholder: 'البحث — AAPL، Tesla، Microsoft…',
    stocksApiKey: 'مفتاح API', stocksSaveKey: 'حفظ المفتاح',
    stocksChange: 'التغيير', stocksHigh: 'أعلى', stocksLow: 'أدنى', stocksVolume: 'حجم',

    translateTitle: 'الترجمة', translateSub: 'أكثر من 100 لغة',
    translatePlaceholder: 'اكتب أو الصق النص هنا…',
    translateFrom: 'من', translateTo: 'إلى', translateSwap: 'تبديل',
    translateCopy: 'نسخ', translateSpeak: 'نطق',

    clockTitle: 'الساعة', clockSub: 'الوقت العالمي · المنبهات',
    clockTabClock: '🕐 ساعة', clockTabWorld: '🌍 العالم', clockTabAlarms: '⏰ منبهات',
    clockAddCity: 'إضافة', clockAddCityPlaceholder: '— إضافة مدينة —',
    clockAlarmTime: 'وقت المنبه', clockAlarmLabel: 'تسمية (اختياري)',
    clockAlarmSet: 'تعيين', clockAlarmDismiss: 'إغلاق',
    clockAlarmNote: '⚠️ تعمل المنبهات فقط عند فتح هذا التبويب',
    clockNoCities: 'لا توجد مدن — أضف واحدة',
    clockNoAlarms: 'لا توجد منبهات مضبوطة',

    calTitle: 'التقويم', calSub: 'جميع أحداثك في مكان واحد',
    calYear: 'سنة', calMonth: 'شهر', calWeek: 'أسبوع', calDay: 'يوم',
    calToday: 'اليوم', calNewEvent: 'حدث جديد', calEditEvent: 'تعديل حدث',
    calEventTitle: 'العنوان', calEventDate: 'التاريخ', calEventAllDay: 'طوال اليوم',
    calEventStart: 'البداية', calEventEnd: 'النهاية', calEventNotes: 'ملاحظات',
    calEventCategory: 'الفئة', calEventTitlePlaceholder: 'اسم الحدث…',
    calEventNotesPlaceholder: 'ملاحظات اختيارية…', calCategoryName: 'اسم الفئة…',
    calNoEvents: 'لا توجد أحداث هذا اليوم', calAddEvent: '+ إضافة حدث',
    calCategories: 'الفئات', calNewCategory: 'فئة جديدة', calAllDay: 'طوال اليوم',
    months: ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],
    monthsShort: ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'],
    days: ['أحد','اثن','ثلا','أرب','خمس','جمع','سبت'],

    shoppingTitle: 'قائمة التسوق', shoppingSub: 'قائمتك فارغة',
    shoppingPlaceholder: 'إضافة عنصر…',
    shoppingClearDone: 'مسح المنجزات',
    shoppingDone: 'منجز', shoppingLeft: 'متبقٍ',
    shoppingNoItems: 'قائمتك فارغة\nأضف عناصر أعلاه',
    shoppingNoSection: 'لا توجد عناصر في',
    sections: {
      produce: 'خضروات وفواكه', dairy: 'منتجات الألبان', meat: 'اللحوم', bakery: 'المخبوزات',
      frozen: 'مجمدات', drinks: 'مشروبات', snacks: 'وجبات خفيفة', cleaning: 'تنظيف',
      personal: 'شخصي', pantry: 'مخزن', other: 'أخرى',
    },

    remTitle: 'التذكيرات', remSub: 'لا يوجد شيء هنا بعد',
    remPlaceholder: 'إضافة تذكير…', remNewTag: 'وسم جديد…',
    remClearDone: 'مسح المنجزات', remDone: 'منجز', remLeft: 'متبقٍ',
    remNoItems: 'لا توجد تذكيرات بعد\nأضف واحدة أعلاه',
    remNoTag: 'لا شيء موسوم', remCreateTag: '+ إنشاء',
    remNewTagPlaceholder: 'اسم الوسم…',
    remTagExists: 'الوسم موجود بالفعل', remEnterTag: 'أدخل اسم الوسم',
    remTagInUse: 'تذكيرات تستخدم هذا الوسم',
    remCleared: 'تم المسح', remAlreadyEmpty: 'فارغ بالفعل',

    notesTitle: 'الملاحظات', notesSub: 'لا توجد ملاحظات بعد',
    notesSearchPlaceholder: 'البحث في الملاحظات…', notesTitlePlaceholder: 'العنوان…',
    notesBodyPlaceholder: 'ابدأ الكتابة…', notesNewTagPlaceholder: 'اسم الوسم…',
    notesAddTag: '+ وسم', notesManageTags: '# وسوم',
    notesNewNote: 'ملاحظة جديدة', notesDeleteConfirm: 'حذف هذه الملاحظة؟',
    notesNoteDeleted: '🗑 تم حذف الملاحظة', notesCopied: '📋 تم النسخ',
    notesNoNotes: 'لا توجد ملاحظات بعد\nاضغط + للإنشاء',
    notesNoMatch: 'لا توجد ملاحظات مطابقة',
    notesManageTagsTitle: 'إدارة الوسوم',
    notesTagExists: 'الوسم موجود بالفعل', notesNoTags: 'لا توجد وسوم بعد',
    notesTagInUse: 'ملاحظات تستخدم هذا الوسم',
    notesChars: 'حرف', notesNoTag: 'بلا وسم', notesUntagged: 'غير موسوم',
    notesCopyUnavail: 'النسخ غير متاح',
  },
};

// RTL languages
const RTL_LANGS = ['he', 'ar'];

const LANG_NAMES = { en: 'English', es: 'Español', fr: 'Français', he: 'עברית', ar: 'العربية' };
const LANG_KEY = 'guicks_lang_v1';

/* ── Public API ── */
window.GI = {
  // Get current language code
  lang() {
    return localStorage.getItem(LANG_KEY) || 'en';
  },
  // Get translation object
  t() {
    return GUICKS_I18N[this.lang()] || GUICKS_I18N.en;
  },
  // Translate a single key with optional {{n}} substitution
  get(key, vars) {
    const t = this.t();
    let val = t[key] || GUICKS_I18N.en[key] || key;
    if (vars) Object.entries(vars).forEach(([k, v]) => { val = val.replace(`{{${k}}}`, v); });
    return val;
  },
  // Set language and reload
  set(code) {
    localStorage.setItem(LANG_KEY, code);
    location.reload();
  },
  // Apply RTL direction to document
  applyDir() {
    const isRtl = RTL_LANGS.includes(this.lang());
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', this.lang());
  },
  // Helper: update element text
  el(id, key, vars) {
    const el = document.getElementById(id);
    if (el) el.textContent = this.get(key, vars);
  },
  // Helper: update placeholder
  ph(id, key) {
    const el = document.getElementById(id);
    if (el) el.placeholder = this.get(key);
  },
  // Current language names map
  langNames: LANG_NAMES,
  rtlLangs: RTL_LANGS,
};

// Auto-apply direction on load
document.addEventListener('DOMContentLoaded', () => window.GI.applyDir());

/* ── data-i18n attribute engine ──
   Usage in HTML:
     <span data-i18n="save">Save</span>
     <input data-i18n-ph="searchPlaceholder" placeholder="Search…">
   Call GI.apply() after DOM ready to translate everything.
*/
window.GI.apply = function(appKey) {
  this.applyDir();
  const t = this.t();

  // data-i18n="key" → textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    // Support nested keys like "appNames.notes"
    const parts = key.split('.');
    let val = t;
    for (const p of parts) val = val?.[p];
    if (!val) { val = GUICKS_I18N.en; for (const p of parts) val = val?.[p]; }
    if (val && typeof val === 'string') el.textContent = val;
  });

  // data-i18n-ph="key" → placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const val = t[key] || GUICKS_I18N.en[key];
    if (val) el.placeholder = val;
  });

  // data-i18n-title="key" → title attribute
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const val = t[key] || GUICKS_I18N.en[key];
    if (val) el.title = val;
  });
};

/* ── RTL global stylesheet ── */
(function() {
  const style = document.createElement('style');
  style.textContent = `
    [dir="rtl"] .back-btn,
    [dir="rtl"] .editor-back-btn { flex-direction: row-reverse; }
    [dir="rtl"] .back-btn svg,
    [dir="rtl"] .editor-back-btn svg { transform: scaleX(-1); }
    [dir="rtl"] .settings-row { flex-direction: row-reverse; }
    [dir="rtl"] .settings-row-chevron { transform: scaleX(-1); }
    [dir="rtl"] .item-row { flex-direction: row-reverse; }
    [dir="rtl"] .filter-scroll { direction: rtl; }
    [dir="rtl"] .note-card { text-align: right; }
    [dir="rtl"] .item-info { text-align: right; }
    [dir="rtl"] .dep-evt { flex-direction: row-reverse; }
    [dir="rtl"] .topnav { flex-direction: row-reverse; }
    [dir="rtl"] .app-header { flex-direction: row-reverse; }
    [dir="rtl"] .summary-bar { flex-direction: row-reverse; }
    [dir="rtl"] .modal-actions { flex-direction: row-reverse; }
    [dir="rtl"] select option { direction: rtl; }
    [dir="rtl"] .item-input,
    [dir="rtl"] .search-input,
    [dir="rtl"] .form-input,
    [dir="rtl"] .editor-title,
    [dir="rtl"] .editor-body,
    [dir="rtl"] textarea { text-align: right; direction: rtl; }
  `;
  document.head.appendChild(style);
})();
