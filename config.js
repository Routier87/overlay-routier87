// ===== CONFIGURATION ROUTIER87 =====
const ROUTIER87_CONFIG = {
    // Informations streamer
    streamer: "ROUTIER87",
    tagline: "🚚 Professional Gaming Driver",
    
    // Durées des timers (en secondes)
    durations: {
        countdown: 3,      // Compte à rebours début
        pause: 300,        // Pause (5 minutes)
        intermission: 180  // Intermission (3 minutes)
    },
    
    // Chemins des fichiers
    paths: {
        logo: "logo.png",
        sounds: {
            start: "sounds/start_sound.mp3",
            pause: "sounds/pause_sound.mp3",
            inter: "sounds/inter_sound.mp3",
            end: "sounds/end_sound.mp3"
        },
        scenes: {
            start: "scenes/scene_start.html",
            pause: "scenes/scene_pause.html",
            inter: "scenes/scene_inter.html",
            end: "scenes/scene_end.html"
        }
    },
    
    // Couleurs thème
    colors: {
        primary: "#FF5500",
        secondary: "#FFAA00",
        accent: "#00AAFF",
        background: "#0A0A14"
    },
    
    // Textes personnalisés
    texts: {
        start: {
            title: "DÉPART IMMINENT !",
            subtitle: "routier87 démarre le moteur",
            message: "La team routier87 est en ligne ! Préparez-vous pour une session gaming intense sur les routes les plus folles."
        },
        pause: {
            title: "PAUSE CARBURANT",
            subtitle: "routier87 reprend dans",
            message: "Petit arrêt technique pour routier87 ! C'est l'heure du café et du check-up. Restez dans les parages !"
        },
        inter: {
            title: "CHANGEMENT DE PARCOURS",
            subtitle: "routier87 consulte la carte",
            message: "On fait le point sur la route parcourue et on planifie la suite. Vos suggestions pour la prochaine destination ?"
        },
        end: {
            title: "ARRIVÉE À BON PORT",
            subtitle: "Merci d'avoir roulé avec routier87 !",
            message: "La route s'arrête ici pour aujourd'hui. Un immense merci à tous les routiers présents ! Rendez-vous au prochain voyage."
        }
    }
};

// Export pour utilisation globale
window.ROUTIER87_CONFIG = ROUTIER87_CONFIG;
