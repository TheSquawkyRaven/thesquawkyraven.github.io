const project_data = [
    // 2023
    {
        timeline: "2023",
        projects: [
            // Personal Portfolio Website
            {
                id: "website-2023",
                icon: "images/squawky_birb_background_10x.png",
                title: "TheSquawkyRaven Website",
                subtitle: "Personal Portfolio",
                tags: ["TailwindCSS", "HTML", "JS", "CSS"],
                links: [
                    {
                        icon: "images/logos/github.png",
                        href: "https://github.com/TheSquawkyRaven/thesquawkyraven.github.io"
                    },
                    {
                        icon: "redirect",
                        href: "#",
                        options: "rotate",
                    },
                ],
                content: {
                    text:
                        `You're looking at it. Made with Tailwind CSS."`,
                }
            },
            // Billy The Worm Bait
            {
                icon: "images/billy_the_worm_bait.png",
                title: "Billy The Worm Bait",
                subtitle: "\"Fishing\" Game",
                tags: ["Unity", "CS"],
                links: [
                    {
                        icon: "images/logos/itch.io.png",
                        href: "https://thesquawkyraven.itch.io/billy-the-worm-bait"
                    },
                    {
                        icon: "images/logos/youtube.png",
                        href: "https://www.youtube.com/watch?v=Se-C33CvcLk"
                    }
                ],
                content: {
                    text:
                        `Made in 48 hours for the GMTK Game Jam 2023, using Unity Engine.
                        This is a survival game, where you play as a bait trying to survive getting eaten while on a hook. It has a line tension mechanic that will wake up the fisherman, and a level system to upgrade certain systems. The game also features another biome once the player reaches 80m!
                        The game is not updated since the jam ended, so it is still the result achieved during that time frame. I got #194 overall, and was the best result I have ever got in a game jam.
                        Try it now on your browser for free! (PC only)`,
                    links: {
                        itch: {
                            iframe: `<iframe frameborder="0" src="https://itch.io/embed/2155512?bg_color=d6f8fe&amp;fg_color=1a2fa5&amp;link_color=49cae0&amp;border_color=0489da" width="552" height="167"><a href="https://thesquawkyraven.itch.io/billy-the-worm-bait">Billy The Worm Bait by TheSquawkyRaven</a></iframe>`
                        },
                        youtube: "https://www.youtube-nocookie.com/embed/Se-C33CvcLk?si=iRTv6vaS-37UvWKG"
                    }
                }
            },
            // Location-based Zombie Simulator (FYP)
            {
                id: "fyp-2023",
                icon: "images/fyp.png",
                title: "Location-based Zombie Simulator (FYP)",
                subtitle: "Braaaiinnzzz",
                tags: ["Unity", "CS"],
                links: [
                    {
                        icon: "images/logos/youtube.png",
                        href: "https://www.youtube.com/watch?v=aq_LUUEkpDY"
                    },
                    {
                        icon: "images/logos/github.png",
                        href: "https://github.com/TheSquawkyRaven/MMU_FYP-LocationSurvivalRPG-Unity"
                    }
                ],
                content: {
                    text:
                        `Made throughout the year as a final year project for MMU, using Unity Engine, Mapbox and Google Maps Places API.
                        This is a location-based survival zombie game. (Think of Pokemon Go, but instead of pokemons, they are zombies, and they try to eat you) Using Mapbox for the terrain, Google Maps Places API for the lootable locations (Think of Pokestops) and even a population density map (Zombie density), this game interfaces with all of them within Unity Engine.
                        I got an A :)
                        Only the video demo is available, unfortunately. Google Maps API costs quite a bit, and don't get me started on server costs.`,
                    links: {
                        youtube: "https://www.youtube-nocookie.com/embed/aq_LUUEkpDY?si=-YNrZGfKlbKb1CVP"
                    }
                }
            },
            // Package Swipe
            {
                id: "package-swipe-2023",
                icon: "images/package_swipe.png",
                title: "Package Swipe",
                subtitle: "Colors",
                tags: ["Unity", "CS"],
                links: [
                    {
                        icon: "images/logos/youtube.png",
                        href: "https://www.youtube.com/watch?v=186qSE7HL0g"
                    }
                ],
                content: {
                    text:
                        `Made in Unity for smart phones. An expanded project initially made as a game productions project assignment in MMU.
                        This game is a casual mobile game. The main objective is to swipe packages that appear indefinitely from conveyor belts to the color and shape coded receivers. The game speeds up and slows down based on any mistakes that the player do.
                        I got the second place on a local game development competition. <u><a href="https://www.pocketnews.com.my/2023/02/28/create-your-own-game-grand-finale-has-been-successfully-held/" target="_blank">Article on Pocket News</a></u>
                        Only video demos are available.`,
                    links: {
                        youtube: [
                            "https://www.youtube-nocookie.com/embed/CA1r__BYa3M?si=rE9nRaaa03IHP6gg",
                            "https://www.youtube-nocookie.com/embed/186qSE7HL0g?si=f0W4Gc4m6NSQDFce"
                        ]
                    }
                }
            },
            // Submaruins
            {
                id: "submaruins-2023",
                icon: "images/submaruins.png",
                title: "Submaruins",
                subtitle: "Sonar",
                tags: ["Unity", "CS"],
                links: [
                    {
                        icon: "images/logos/youtube.png",
                        href: "https://www.youtube.com/watch?v=vvwzAjJVgtY"
                    },
                    {
                        icon: "images/logos/github.png",
                        href: "https://github.com/TheSquawkyRaven/MMU_Submaruins-Unity"
                    }
                ],
                content: {
                    text:
                        `Made with Unity, as a 3D game programming project assignment in MMU.
                        This is a third person game casual game about cleaning up an ocean.
                        Only video demo is available.`,
                    links: {
                        youtube: [
                            "https://www.youtube-nocookie.com/embed/vvwzAjJVgtY?si=36BfbPTuinwiz63V"
                        ]
                    }
                }
            },
            // Lightning Runners
            {
                id: "lightning-runners-2023",
                icon: "images/lightning_runners.png",
                title: "Lightning Runners",
                subtitle: "Pew pew",
                tags: [/*"UnrealEngine4", */"UnrealEngine"],
                links: [
                    {
                        icon: "images/logos/youtube.png",
                        href: "https://www.youtube.com/watch?v=3h8Ij54HKXg"
                    },
                    {
                        icon: "images/logos/github.png",
                        href: "https://github.com/TheSquawkyRaven/MMU_LightningRunners_UnrealEngine4"
                    }
                ],
                content: {
                    text:
                        `Made with Unreal Engine 4, as a game physics project assignment in MMU.
                        This is a FPS with wall running, wall jumping, and slow-mo features.
                        Only video demo is available.`,
                    links: {
                        youtube: [
                            "https://www.youtube-nocookie.com/embed/3h8Ij54HKXg?si=EcV9ibjwPPhfNSv3"
                        ]
                    }
                }
            },
            // Hungry Pawz
            {
                id: "hungry-pawz-2023",
                icon: "images/hungry_pawz.png",
                title: "Hungry Pawz",
                subtitle: "Meow",
                tags: ["Phaser", "HTML", "JS"],
                links: [
                    {
                        icon: "images/logos/youtube.png",
                        href: "https://www.youtube.com/watch?v=z-OJuVfIRps"
                    },
                    {
                        icon: "images/logos/github.png",
                        href: "https://github.com/TheSquawkyRaven/MMU_HungryPawz-Phaser"
                    }
                ],
                content: {
                    text:
                        `Made with PhaserJS, as a game physics project assignment in MMU.
                        This is a 2D platformer, with multiple endings.
                        Only video demo is available.`,
                    links: {
                        youtube: [
                            "https://www.youtube-nocookie.com/embed/z-OJuVfIRps?si=OjdgpSGfWMSox_a7"
                        ]
                    }
                }
            },
            // Zombie SurvivorZ
            {
                id: "zombie-survivorz-2023",
                icon: "images/zombie_survivorz.png",
                title: "Zombie SurvivorZ",
                subtitle: "Zombie Shooter",
                tags: ["MonoGame", "CS"],
                links: [
                    {
                        icon: "images/logos/youtube.png",
                        href: "https://www.youtube.com/watch?v=fbaGoi2UOK8"
                    },
                    {
                        icon: "images/logos/github.png",
                        href: "https://github.com/TheSquawkyRaven/MMU_ZombieSurvivorZ-MonoGame"
                    }
                ],
                content: {
                    text:
                        `Made with a friend using MonoGame, as a game algorithms project assignment in MMU.
                        This is a 2D top down zombie shooter games, inspired by classical top down shooters released in the 2000s.
                        Only video demo is available.`,
                    links: {
                        youtube: [
                            "https://www.youtube-nocookie.com/embed/fbaGoi2UOK8?si=Yc6KABXiBsD42FXy"
                        ]
                    }
                }
            }
        ]
    },
    // 2022
    {
        timeline: "2022",
        projects: [
            // Oops, I Lost my Sword in the Dungeon
            {
                id: "oops-i-lost-my-sword-2022",
                icon: "images/oops_i_lost_my_sword.png",
                title: "Oops, I Lost my Sword in the Dungeon",
                subtitle: "Traps n Monsters",
                tags: ["GDevelop"],
                links: [
                    {
                        icon: "images/logos/itch.io.png",
                        href: "https://thesquawkyraven.itch.io/oops-i-lost-my-sword-in-the-dungeon"
                    },
                    {
                        icon: "images/logos/youtube.png",
                        href: "https://www.youtube.com/watch?v=EPDNOFAexq0"
                    },
                    {
                        icon: "images/logos/github.png",
                        href: "https://github.com/TheSquawkyRaven/MMU_OopsILostMySwordInTheDungeon-GDevelop"
                    }
                ],
                content: {
                    text:
                        `Made with a friend in MMU with GDevelop."
                        This game is a turn-based puzzle game, in which you can place traps to help you get back to where the protagonist lost their sword.
                        Try it now on your browser for free! (PC only)`,
                    links: {
                        itch: {
                            iframe: `<iframe frameborder="0" src="https://itch.io/embed/1738262?bg_color=d7c4b6&amp;fg_color=000000&amp;link_color=803507&amp;border_color=766260" width="552" height="167"><a href="https://thesquawkyraven.itch.io/oops-i-lost-my-sword-in-the-dungeon">Oops, I Lost my Sword in the Dungeon by TheSquawkyRaven, euwern</a></iframe>`
                        },
                        youtube: "https://www.youtube-nocookie.com/embed/EPDNOFAexq0?si=yRhQseP_x8R9Qal3"
                    }
                },
            },
            // Operation Quackn't
            {
                id: "operation-quacknt-2022",
                icon: "images/operation_quacknt.png",
                title: "Operation Quackn't",
                subtitle: "Duck Shooter (but they shoot back)",
                tags: ["GDevelop"],
                links: [
                    {
                        icon: "images/logos/itch.io.png",
                        href: "https://thesquawkyraven.itch.io/operation-quacknt"
                    },
                    {
                        icon: "images/logos/youtube.png",
                        href: "https://www.youtube.com/watch?v=gAyzPUpFp9Q"
                    },
                    {
                        icon: "images/logos/github.png",
                        href: "https://github.com/TheSquawkyRaven/MMU_OperationQuacknt-GDevelop"
                    }
                ],
                content: {
                    text:
                        `Made with GDevelop.
                        This game is a static shooter game. The weapon is a 3-in-1 weapon, featuring a switch between the rifle and the shotgun, plus a multi-purpose grappling hook that can be used to strip the ducks' armor, and to grapple chickens to replenish health. Powerups included!
                        Try it now on your browser for free! (PC only)`,
                    links: {
                        itch: {
                            iframe: `<iframe frameborder="0" src="https://itch.io/embed/1738180" width="552" height="167"><a href="https://thesquawkyraven.itch.io/operation-quacknt">Operation Quackn't by TheSquawkyRaven</a></iframe>`
                        },
                        youtube: "https://www.youtube-nocookie.com/embed/gAyzPUpFp9Q?si=F2DVOpPsoNEY81J6"
                    }
                }
            }
        ]
    },
    // 2021
    {
        timeline: "2021",
        projects: [
            // TTS Squawk
            {
                id: "tts-squawk-2021",
                icon: "images/tts_squawk.png",
                title: "TTS Squawk",
                subtitle: "Squawk squawk",
                tags: ["CS", "HTML", "JS", "CSS"],
                links: [
                    {
                        icon: "images/logos/youtube.png",
                        href: "https://www.youtube.com/watch?v=dMTg3XHAHH0"
                    },
                    {
                        icon: "images/logos/github.png",
                        href: "https://github.com/TheSquawkyRaven/TTSSquawk-Web-JS-CS"
                    }
                ],
                content: {
                    text:
                        `Made using, HTML, JavaScript, CSS and C#."
                        This is a Google Meet extension that reads the chat, and a server that generates text-to-speech audio. The chat will be converted into Text-to-Speech audio and played based on configurations.
                        Using the VB-Cable, which connects an audio output deivce to a audio input device, and using the audio output of the extension with the dropdown along with whitelisting yourself, it can simulate a text to speech program of whatever you type on the chat into the microphone and sent through Google Meet.
                        The video demo is as below.`,
                    links: {
                        youtube: "https://www.youtube-nocookie.com/embed/dMTg3XHAHH0?si=fpvQz7zkGvQ5oCrB"
                    }
                },
            },
            // Squawker
            {
                id: "squawker-2021",
                icon: "images/squawker.png",
                title: "Squawker",
                subtitle: "Squawk",
                tags: ["Unity", "CS", "HTML", "JS", "CSS"],
                links: [
                    {
                        icon: "images/logos/youtube.png",
                        href: "https://www.youtube.com/watch?v=_Gp9jB1_URU"
                    },
                    {
                        icon: "images/logos/github.png",
                        href: "https://github.com/TheSquawkyRaven/Squawker-Web-JS-Unity"
                    }
                ],
                content: {
                    text:
                        `Made using HTML, JavaScript and Unity Engine.
                        This is a Google Meet extension that reads the chat, and a Unity program that interfaces between them.
                        Initially, I didn't know you can create a Websocket server within Unity C# itself, thus I used NodeJS to handle connections that writes to files. After realizing it, I made the connection simpler and more stable.
                        It's inspired by Twitch streams where in some cases viewers can type commands in the chat to change things in the stream. This program does it similarly, and can be used to show text in a different way, and for fun.
                        A lecturer, during online classes, used it in their classes and mainly use it to notify them about new chat messages, since Google Meet chats are easy to miss. Other features like using the timer, randomization etc were also requested and implemented in consequent builds.
                        This serves as a foundation and inspiration to TTS Squawk.
                        Video Demo:`,
                    links: {
                        youtube: "https://www.youtube-nocookie.com/embed/_Gp9jB1_URU?si=P8AGZmWQcPPzhDYH"
                    }
                }
            }
        ]
    },
    // 2020
    {
        timeline: "2020",
        projects: [
            // Winds of the Past
            {
                id: "winds-of-the-past-2020",
                icon: "images/winds_of_the_past.png",
                title: "Winds of the Past",
                subtitle: "Tick Tock Tack",
                tags: ["Unity", "CS"],
                links: [
                    {
                        icon: "images/logos/itch.io.png",
                        href: "https://thesquawkyraven.itch.io/winds-of-the-past"
                    },
                    {
                        icon: "images/logos/youtube.png",
                        href: "https://www.youtube.com/watch?v=glmBgMb-dkc"
                    }
                ],
                content: {
                    text:
                        `Made in 7 days for the Brackeys Game Jam 2020.2, using Unity Engine."
                        This game is a puzzle game, and has increasingly harder puzzles while playing with the clock hand's mechanics. Make it turn clockwise or anti-clockwise to reach the objective!
                        Try it now on your browser for free! (PC only)`,
                    links: {
                        itch: {
                            iframe: `<iframe frameborder="0" src="https://itch.io/embed/722770?bg_color=e5e6ff&amp;fg_color=000000&amp;link_color=ff5858&amp;border_color=3b466a" width="552" height="167"><a href="https://thesquawkyraven.itch.io/winds-of-the-past">Winds of the Past by TheSquawkyRaven</a></iframe>`
                        },
                        youtube: "https://www.youtube-nocookie.com/embed/glmBgMb-dkc?si=5n2XiRbQ0VDpYC5Z"
                    }
                },
            },
            // Spooky Babysitter
            {
                id: "spooky-babysitter-2020",
                icon: "images/spooky_babysitter.png",
                title: "Spooky Babysitter",
                subtitle: "Suicidal Babies",
                tags: ["Unity", "CS"],
                links: [
                    {
                        icon: "images/logos/itch.io.png",
                        href: "https://thesquawkyraven.itch.io/the-babysitter"
                    },
                    {
                        icon: "images/logos/youtube.png",
                        href: "https://www.youtube.com/watch?v=de7r7Y-F7O8"
                    }
                ],
                content: {
                    text:
                        `Made in 48 hours with a friend in MMU for the GMTK Game Jam 2020, using Unity Engine.
                        This is the first game I have ever published and publicly played by strangers in the internet. This game is an overscoped top-down babysitting mess. Babies will do stupid shit, and when they die, they become ghosts that make it even harder - carbon monoxide poisoning, revealing electric sockets, setting your house on fire, and more.
                        Download and try it now for free! (PC only)`,
                    links: {
                        itch: {
                            iframe: `<iframe frameborder="0" src="https://itch.io/embed/696872?dark=true" width="552" height="167"><a href="https://thesquawkyraven.itch.io/the-babysitter">Spooky Babysitter by TheSquawkyRaven, Flashgit125</a></iframe>`
                        },
                        youtube: "https://www.youtube-nocookie.com/embed/de7r7Y-F7O8?si=JoEHCx_9tkwTy9ho"
                    }
                }
            }
        ]
    },
]