<template>
<div class="landing-container">
    <todo-navbar :viewSelection="'landing'" class="navbar-landing absolute"></todo-navbar>
    <v-content>
        <section>
            <v-parallax :src="backgroundTop">
                <v-layout align-end>
                    <v-layout align-center column justify-end class="white--text content-top height-100">

                        <h1 class="white--text mb-2 display-1 text-xs-center">2do-list</h1>

                        <div class="subheading mb-3 text-xs-center">Usa la mejor aplicación de tareas existente en todo el mercado. La vida puede ser abrumadora, pero no tiene por qué ser así. 2do-list te permite seguir el progreso de todo en un solo lugar para que puedas lograr tus objetivos y disfrutar de mayor tranquilidad mientras lo haces.</div>
                        <v-btn class="blue lighten-2 mt-5" dark large @click="goLogin()">
                            LET'S START
                        </v-btn>

                        <div>
                            <v-btn outline fab small color="white" href="http://www.facebook.com">
                                <font-awesome-icon :icon="['fab', 'facebook-f']" fixed-width size="1x" />
                            </v-btn>
                            <v-btn outline fab small color="white" href="www.twitter.com">
                                <font-awesome-icon :icon="['fab', 'twitter']" fixed-width size="1x" />
                            </v-btn>
                            <v-btn outline fab small color="white" href="www.google.com">
                                <font-awesome-icon :icon="['fab', 'google']" fixed-width size="1x" />
                            </v-btn>
                        </div>
                    </v-layout>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout column wrap class="my-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">Algunos de nuestro usuarios</h2>
                        <span class="subheading">
                            Que están encantados 
                        </span>
                    </div>
                </v-flex>
                <v-flex xs12 class="empresas-container">
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md4 v-for="(empresa, index) in empresas" :key="index">
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-img :src="empresa.logo" :class="empresa.class"></v-img>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">{{empresa.title}} <br><small>{{empresa.persona}}</small></div>
                                    </v-card-title>
                                    <v-card-text>
                                        {{empresa.mensaje}}
                                        <br>
                                        <v-btn color="white" class="primary-color" :href="empresa.liga" target="_blank">
                                            Ir
                                            <font-awesome-icon right :icon="['fas', 'angle-right']" fixed-width size="1x" />
                                        </v-btn>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
            <el-carousel :interval="5000" arrow="always" class="carrousel-container">
                <el-carousel-item v-for="(empresa, index) in empresas" :key="index" class="full-center">
                    <v-card class="elevation-0 transparent">
                        <v-card-text class="text-xs-center">
                            <v-img :src="empresa.logo" :class="empresa.class"></v-img>
                        </v-card-text>
                        <v-card-title primary-title class="layout justify-center">
                            <div class="headline">{{empresa.title}} <br><small>{{empresa.persona}}</small></div>
                        </v-card-title>
                        <v-card-text>
                            {{empresa.mensaje}}
                            <br>
                            <v-btn color="white" class="primary-color" :href="empresa.liga" target="_blank">
                                Ir
                                <font-awesome-icon right :icon="['fas', 'angle-right']" fixed-width size="1x" />
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </el-carousel-item>
            </el-carousel>
        </section>

        <section>
            <v-parallax :src="backgroundMiddle" height="380">
                <v-layout column align-center justify-center>
                    <div class="headline white--text mb-3 text-xs-center">Organizar tareas nunca ha sido tan fácil</div>
                    <em>Aprende a organizarte de una forma fácil</em>
                    <v-btn class="blue lighten-2 mt-5" dark large @click="goLogin()">
                        ¡Comienza hoy!
                    </v-btn>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-container grid-list-xl>
                <v-layout row wrap justify-center class="my-5">
                    <v-flex xs12 sm4>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Sobre Nosotros</div>
                            </v-card-title>
                            <v-card-text>
                                Somos una empresa socialmente responsable con una gran experiencia en Desarrollo de Software. Estamos incluso más orgullosos de lo que nuestros clientes han conseguido con 2do-list, y nos emociona empoderar a nuevos equipos todos los días. Estamos creando un producto que permite a los equipos dar seguimiento a su trabajo… Y lograr grandes resultados.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm4 offset-sm1>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                                <div class="headline">Contactanos</div>
                            </v-card-title>
                            <v-card-text>
                                Estamos para atenderte las 24 horas del día.
                            </v-card-text>
                            <v-list class="transparent">
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <font-awesome-icon class="blue--text text--lighten-2" :icon="['fas', 'phone']" fixed-width size="1x" />
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>111-111-1111</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <font-awesome-icon class="blue--text text--lighten-2" :icon="['fas', 'map']" fixed-width size="1x" />
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>Monterrey, NL.</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile>
                                    <v-list-tile-action>
                                        <font-awesome-icon class="blue--text text--lighten-2" :icon="['fas', 'envelope']" fixed-width size="1x" />
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>ing.oscar.ar@gmail.com</v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>

        <v-footer class="blue darken-2">
            <v-layout row wrap align-center>
                <v-flex xs12>
                    <div class="white--text ml-3">
                        Hecho con
                        <font-awesome-icon class="red--text" :icon="['fas', 'heart']" fixed-width size="1x" />
                        por <a class="white--text" href="https://github.com/osalarcon/devcampmx-frontend" target="_blank">Oscar Alarcón Rodríguez</a>
                    </div>
                </v-flex>
            </v-layout>
        </v-footer>
    </v-content>
</div>
</template>

<style lang="scss" scoped>
@import "@/variables.scss";

.logo-empresas-one {
    height: 70px;
    margin-bottom: 12px;
    margin-top: 12px;
}

.logo-empresas {
    height: 94px;
}

.content-top {
    flex-basis: 50%;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    max-width: 50%;
}

.empresas-container {
    display: initial;
}

.carrousel-container {
    display: none;
}

@media only screen and (max-width: 375px) {
    .content-top {
        flex-basis: 100%;
        -webkit-box-flex: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        max-width: 100%;
    }

    .empresas-container {
        display: none;
    }

    .carrousel-container {
        display: block;
    }
}

.main-content {
    background: blue;
    width: 100%;
    height: calc(100vh - 81px);
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";
import backgroundTop from "@/assets/landing_background_top_grad.jpg";
import backgroundMiddle from "@/assets/espacio-background.jpg";
import onephaseLogo from "@/assets/Logo-OnePhase.png";
import simpatLogo from "@/assets/Logo-Simpat.png";
import urbaaniteLogo from "@/assets/Logo-Urbaanite.png";
import logo from "@/assets/logo.png";

export default {
    components: {
        "todo-navbar": Navbar
    },
    data() {
        return {
            backgroundTop: backgroundTop,
            backgroundMiddle: backgroundMiddle,
            onephaseLogo: onephaseLogo,
            simpatLogo: simpatLogo,
            urbaaniteLogo: urbaaniteLogo,
            logo: logo,
            empresas: [{
                    name: 'onephase',
                    logo: onephaseLogo,
                    class: 'logo-empresas-one',
                    title: '-"¡Extraordinaria herramienta!"',
                    persona: 'Carlos Egremy',
                    mensaje: 'Con unos cuantos clicks tienes todo a la mano.',
                    liga: 'http://www.onephase.com'
                },
                {
                    name: 'simpat',
                    logo: simpatLogo,
                    class: 'logo-empresas',
                    title: '-"¡Nos ha facilitado todo!"',
                    persona: 'Eduardo Ramos',
                    mensaje: 'Me ayuda muchisimo cuando salgo de viaje.',
                    liga: 'http://www.simpatsolutions.com/'
                },
                {
                    name: 'simpat',
                    logo: urbaaniteLogo,
                    class: 'logo-empresas',
                    title: '-"¡Nuestra mejor decisión!"',
                    persona: 'Michelle Sanders',
                    mensaje: 'Nosotros estamos contentos, el cliente nota las consecuencias.',
                    liga: 'https://urbaanite.com/'
                },
            ]
        };
    },
    methods: {
        goLogin() {
            this.$router.push("login");
        }
    }
};
</script>
