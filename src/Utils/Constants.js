import web from '../Images/web.jpg';
import electric from '../Images/electricidad.jpg';
import ti from '../Images/soporte-ti.jpg';
import linkedin from '../Images/Icon/linkedin.png'
import github from '../Images/Icon/github.png'
import discord from '../Images/Icon/discord.png'
import whatsapp from '../Images/Icon/whatsapp.png'
import myphoto from '../Images/foto.jpg'
import close_icon from '../Images/Icon/close_icon.png'
import cardimg from '../Images/web.jpg';

export const SERVICE_IMAGES = {
    electric:Object.fromEntries(
        Object.entries(import.meta.glob('../Images/services/electric/*.{png,jpg,jpeg,svg,gif,webp}'))
            .map(([path, module]) => [path.split('/').pop().split('.')[0], module])
    ),
    itsupport:Object.fromEntries(
        Object.entries(import.meta.glob('../Images/services/it_support/*.{png,jpg,jpeg,svg,gif,webp}'))
            .map(([path, module]) => [path.split('/').pop().split('.')[0], module])
    ),
    webdeveloper:Object.fromEntries(
        Object.entries(import.meta.glob('../Images/services/web_developer/*.{png,jpg,jpeg,svg,gif,webp}'))
            .map(([path, module]) => [path.split('/').pop().split('.')[0], module])
    ),
};

export const PROJECTS_IMAGES = {
    news:Object.fromEntries(
        Object.entries(import.meta.glob('../Images/projects/News/*.{png,jpg,jpeg,svg,gif,webp}'))
            .map(([path, module]) => [path.split('/').pop().split('.')[0], module])
    ),
    around:Object.fromEntries(
        Object.entries(import.meta.glob('../Images/projects/Around/*.{png,jpg,jpeg,svg,gif,webp}'))
            .map(([path, module]) => [path.split('/').pop().split('.')[0], module])
    ),
    coffeeshop:Object.fromEntries(
        Object.entries(import.meta.glob('../Images/projects/Coffeeshop/*.{png,jpg,jpeg,svg,gif,webp}'))
            .map(([path, module]) => [path.split('/').pop().split('.')[0], module])
    ),
    homeland:Object.fromEntries(
        Object.entries(import.meta.glob('../Images/projects/Homeland/*.{png,jpg,jpeg,svg,gif,webp}'))
            .map(([path, module]) => [path.split('/').pop().split('.')[0], module])
    ),
};

export const IMAGES = {
    web,
    electric,
    ti,
    linkedin,
    github,
    discord,
    whatsapp,
    myphoto,
    close_icon,
    cardimg
}

export const LINKS = {
    linkedin:"https://www.linkedin.com/in/alexander-m-artemiev/",
    github:"https://github.com/clavichcov",
    discord:"https://discord.com/users/1289590740011450431",
    whatsapp:"https://wa.me/573209637937?text=Hola%20Alexander,%20vi%20tu%20portafolio%20y%20me%20interesan%20tus%20servicios",
    news:"https://news-explorer-frontend-amber.vercel.app/",
    around:"#",
    coffeeshop:"#",
}