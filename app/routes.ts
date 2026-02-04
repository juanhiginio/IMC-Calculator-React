import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [
    index("routes/Inicio/Inicio.tsx"),
    route("inicio", "routes/Inicio/Inicio.tsx", { id : "inicioRoute" }),
    route("CalculadoraIMC", "routes/IMC/IMC.tsx", { id : "imcRoute" }),
] satisfies RouteConfig;
