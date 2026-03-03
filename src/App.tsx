import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Zap, 
  CreditCard, 
  Mail, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  PlayCircle,
  Users,
  Download,
  Verified,
  Globe,
  Eye,
  Video,
  CreditCard as Payments
} from 'lucide-react';
import { cn } from './lib/utils';

// --- SECCIONES ---

const Hero = ({ onAction }: { onAction: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="relative"
  >
    {/* Floating Blobs */}
    <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none"></div>

    {/* Hero Section */}
    <section className="relative pt-20 pb-40 px-6 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <span className="inline-block py-1 px-4 rounded-full border border-yellow-400/30 bg-yellow-400/5 text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase mb-8">
          Edición Dark 2024
        </span>
        <h1 className="text-5xl md:text-8xl font-black leading-[1.1] mb-8 text-white tracking-tighter">
          Domina el Trabajo Remoto y <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-cyan-400">Gana en Dólares</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Únete al <span className="text-white font-semibold">Reto Remoto</span> y transforma tu carrera profesional en una trayectoria global sin límites geográficos.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 text-slate-300">
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="font-medium">Sin experiencia previa</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <Payments className="w-5 h-5 text-cyan-400" />
            <span className="font-medium">Sueldos en USD</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <Globe className="w-5 h-5 text-cyan-400" />
            <span className="font-medium">Flexibilidad total</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={onAction}
            className="metallic-accent shimmer-btn text-black text-xl md:text-2xl font-black py-6 px-14 rounded-2xl transition-transform hover:scale-105 uppercase tracking-tighter active:scale-95"
          >
            Quiero empezar el Reto Remoto ahora
          </button>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Rocket className="w-4 h-4 text-red-500 animate-pulse" />
            <p className="italic">Cupos limitados con 80% de descuento</p>
          </div>
        </div>
      </div>
    </section>

    {/* Pain Points Section */}
    <section className="py-32 px-6 relative bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">¿Te identificas con esto?</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-10 rounded-[2rem] group hover:bg-white/10 transition-all duration-500">
            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-8 h-8 text-red-500 rotate-90" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Sueldos Estancados</h3>
            <p className="text-slate-400 leading-relaxed font-light">Ganas en moneda local que se devalúa cada día mientras los precios globales siguen subiendo.</p>
          </div>
          <div className="glass-card p-10 rounded-[2rem] mt-0 md:mt-8 group hover:bg-white/10 transition-all duration-500 border-yellow-400/20">
            <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Sin Tiempo Libre</h3>
            <p className="text-slate-400 leading-relaxed font-light">Horas perdidas en el tráfico y oficinas grises, perdiéndote los momentos que realmente importan.</p>
          </div>
          <div className="glass-card p-10 rounded-[2rem] group hover:bg-white/10 transition-all duration-500">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Miedo al Futuro</h3>
            <p className="text-slate-400 leading-relaxed font-light">Sientes que tu carrera está en pausa mientras el mundo digital avanza sin esperarte.</p>
          </div>
        </div>
        <div className="mt-24 text-center">
          <p className="text-2xl text-slate-300 font-light italic max-w-3xl mx-auto leading-relaxed">
            "Entendemos tu frustración. Creamos una <span className="text-yellow-400 underline underline-offset-8">ruta de escape clara</span> para que dejes de sobrevivir y empieces a liderar tu vida."
          </p>
        </div>
      </div>
    </section>

    {/* Promise Section */}
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-cyan-400/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-video bg-indigo-950">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
                <PlayCircle className="w-20 h-20 text-white opacity-80 cursor-pointer hover:scale-110 transition-transform" />
              </div>
              <img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" />
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">Nuestra promesa: Libertad sin condiciones</h2>
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-all">
                  <Rocket className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-2">Crecimiento Exponencial</h4>
                  <p className="text-slate-400 leading-relaxed">Posiciónate en mercados de EE.UU. y Europa donde tu talento se valora en la moneda más fuerte.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-yellow-400/10 group-hover:border-yellow-400/30 transition-all">
                  <Globe className="w-8 h-8 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-2">Omnipresencia Profesional</h4>
                  <p className="text-slate-400 leading-relaxed">Tu oficina es donde tú decidas estar. Ya sea un café en París o la comodidad de tu sala.</p>
                </div>
              </div>
            </div>
            <p className="mt-12 font-black text-yellow-400 text-xl tracking-tight uppercase flex items-center gap-3">
              <span className="w-12 h-[2px] bg-yellow-400"></span>
              Tu nueva vida comienza hoy
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* What's included */}
    <section className="py-32 bg-black/50 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">¿Qué incluye el Reto?</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light">Un ecosistema diseñado para tu éxito inmediato.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="glass-card p-10 rounded-[2.5rem] group">
            <div className="text-cyan-400 font-black text-xs uppercase mb-6 tracking-[0.3em]">Módulos Master</div>
            <h3 className="text-2xl font-bold mb-4 text-white italic">3 Sesiones Élite</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">Metodología propietaria grabada en 4K y sesiones en vivo para despejar cualquier duda.</p>
            <div className="flex justify-end">
              <Video className="w-16 h-16 text-white/5 group-hover:text-cyan-400/20 transition-colors" />
            </div>
          </div>
          <div className="glass-card p-10 rounded-[2.5rem] group">
            <div className="text-yellow-400 font-black text-xs uppercase mb-6 tracking-[0.3em]">Networking</div>
            <h3 className="text-2xl font-bold mb-4 text-white italic">Círculo Exclusivo</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">Acceso a nuestra comunidad VIP en WhatsApp. El networking es tu mayor activo.</p>
            <div className="flex justify-end">
              <Users className="w-16 h-16 text-white/5 group-hover:text-yellow-400/20 transition-colors" />
            </div>
          </div>
          <div className="glass-card p-10 rounded-[2.5rem] group border-red-500/20">
            <div className="text-red-500 font-black text-xs uppercase mb-6 tracking-[0.3em]">Bono Activo</div>
            <h3 className="text-2xl font-bold mb-4 text-white italic">Capital Académico</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">Recibe $50 USD de crédito inmediato para escalar tu formación dentro de la academia.</p>
            <div className="flex justify-end">
              <Verified className="w-16 h-16 text-white/5 group-hover:text-red-500/20 transition-colors" />
            </div>
          </div>
        </div>
        <div className="mt-20 text-center text-slate-500 text-sm font-semibold tracking-widest uppercase">
          Acceso vitalicio • Actualizaciones constantes • Material descargable
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="py-32 px-6" id="precios">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Invierte en tu Libertad</h2>
          <p className="text-slate-400 text-xl font-light">Planes diseñados para cada etapa de tu carrera.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animated-gradient-border p-0.5">
            <div className="bg-[#050510] rounded-[1.45rem] p-10 relative flex flex-col h-full">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 metallic-accent text-black px-8 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg">
                Más Popular
              </div>
              <div className="mb-10 text-center">
                <h3 className="text-3xl font-black text-white mb-4">Plan LATAM</h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-6xl font-black text-white">$19</span>
                  <span className="text-slate-500 font-bold text-lg">USD</span>
                </div>
                <p className="text-slate-500 mt-4 text-sm font-medium">Acceso inmediato y de por vida.</p>
              </div>
              <ul className="space-y-5 mb-12 flex-grow">
                {["3 Sesiones Intensivas Master", "Grabaciones en 4K de por vida", "Material PDF y Templates"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
                <li className="flex items-center gap-4 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  <span className="font-black text-yellow-400">Bono Regalo $50 USD</span>
                </li>
              </ul>
              <button className="metallic-accent shimmer-btn w-full text-black font-black py-5 rounded-2xl shadow-xl transition-all uppercase tracking-tighter">
                Comenzar Reto Ahora
              </button>
              <div className="mt-8 flex items-center justify-center gap-2 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                <ShieldCheck className="w-4 h-4" />
                Garantía total de 30 días
              </div>
            </div>
          </div>
          <div className="glass-card rounded-[1.5rem] p-10 flex flex-col border-white/5">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-4">Plan Premium</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">$47</span>
                <span className="text-slate-500 font-bold">USD</span>
              </div>
              <p className="text-slate-500 mt-4 text-sm">Para una aceleración personalizada.</p>
            </div>
            <ul className="space-y-5 mb-12 flex-grow text-slate-400">
              <li className="flex items-center gap-4">
                <Star className="w-5 h-5 text-cyan-400" />
                <span className="font-bold text-white">Todo el Plan LATAM</span>
              </li>
              {["Revisión de CV por expertos", "Sesión Q&A Privada", "Directorio de 500+ Empresas"].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-slate-600" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-5 rounded-2xl border border-white/10 transition-all uppercase tracking-widest text-sm">
              Acceder Premium
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-32 bg-black/30 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-white text-center mb-16">Preguntas del Futuro</h2>
        <div className="space-y-6">
          {[
            { q: "¿Es necesario hablar inglés?", a: "No es una barrera. El mercado hispano está explotando. Te enseñaremos a capitalizar tu idioma nativo en empresas que pagan en dólares." },
            { q: "¿Cómo accedo al material?", a: "Inmediatamente después del pago recibirás tus credenciales en el correo para entrar a nuestra plataforma privada." },
            { q: "¿Hay soporte real?", a: "Sí, nuestro equipo y la comunidad están activos 24/7 en el grupo de WhatsApp para acompañarte en cada paso." }
          ].map((item, i) => (
            <details key={i} className="group glass-card rounded-2xl overflow-hidden border-white/5">
              <summary className="p-8 cursor-pointer flex justify-between items-center font-bold text-white list-none group-hover:bg-white/5 transition-colors">
                {item.q}
                <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform text-yellow-400" />
              </summary>
              <div className="px-8 pb-8 text-slate-400 font-light leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-40 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-yellow-400/5 blur-[150px] rounded-full scale-150"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-black mb-10 text-white italic tracking-tighter">¿Cuál será tu próxima oficina?</h2>
        <p className="text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed font-light">
          El mundo ya cambió. Tú decides si te quedas mirando o te unes a los que están definiendo el futuro del trabajo.
        </p>
        <button 
          onClick={onAction}
          className="metallic-accent shimmer-btn text-black text-2xl font-black py-7 px-16 rounded-3xl shadow-3xl transition-all hover:scale-105 uppercase tracking-tighter"
        >
          Quiero mi Libertad Ahora
        </button>
        <div className="mt-12 flex items-center justify-center gap-4 text-slate-500">
          <ShieldCheck className="w-5 h-5 text-yellow-400" />
          <span className="font-bold text-xs uppercase tracking-widest">Transacción 100% segura y privada</span>
        </div>
      </div>
    </section>
  </motion.div>
);

const Contenido = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="max-w-7xl mx-auto px-6 py-12 lg:px-20"
  >
    <div className="relative overflow-hidden rounded-[2.5rem] mb-16 group border border-white/10 shadow-2xl">
      <div className="min-h-[400px] flex flex-col justify-end p-8 lg:p-16 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.95) 10%, rgba(10, 10, 42, 0.4) 60%), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop")' }}>
        <h2 className="text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight max-w-3xl mb-4">
          Esto es lo que obtienes al <span className="text-yellow-400">entrar hoy</span>
        </h2>
        <p className="text-slate-300 mt-2 text-xl max-w-xl font-light">
          Únete a la nueva generación de profesionales remotos con el programa más completo y premium del mercado.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {[
        { icon: <Video className="w-8 h-8 text-cyan-500" />, title: "3 Sesiones en vivo", desc: "Clases interactivas en directo con expertos de la industria para resolver dudas en tiempo real." },
        { icon: <PlayCircle className="w-8 h-8 text-cyan-500" />, title: "Grabaciones del curso", desc: "Acceso ilimitado de por vida a todo el material audiovisual en alta definición." },
        { icon: <Users className="w-8 h-8 text-cyan-500" />, title: "Grupo WhatsApp", desc: "Comunidad exclusiva 24/7 donde podrás hacer networking y recibir soporte constante." },
        { icon: <Download className="w-8 h-8 text-cyan-500" />, title: "Material descargable", desc: "Plantillas profesionales, guías en PDF y herramientas listas para usar inmediatamente." }
      ].map((item, i) => (
        <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-cyan-500/50 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
          <p className="text-slate-400 leading-relaxed font-light">{item.desc}</p>
        </div>
      ))}
      
      <div className="bg-white/5 backdrop-blur-xl border border-yellow-400/20 p-8 rounded-3xl lg:col-span-2 flex flex-col md:flex-row gap-8 items-center">
        <div className="w-20 h-20 flex-shrink-0 bg-yellow-400/10 rounded-full flex items-center justify-center border border-yellow-400/30 shadow-[0_0_15px_rgba(255,204,0,0.2)]">
          <Payments className="w-10 h-10 text-yellow-400" />
        </div>
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h3 className="text-2xl font-bold text-white">Bono de $50 USD</h3>
            <span className="bg-yellow-400 text-black text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Regalo</span>
          </div>
          <p className="text-slate-400 leading-relaxed font-light">
            Crédito directo exclusivo para herramientas premium de productividad. Empieza tu transformación con las mejores herramientas del mercado internacional.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Precios = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.05 }}
    className="max-w-6xl mx-auto px-6 py-12"
  >
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Invierte en tu Libertad</h2>
      <p className="text-slate-400 text-xl font-light">Planes diseñados para cada etapa de tu carrera.</p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
      {/* Plan LATAM */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
        <div className="relative bg-[#050510] rounded-[2.5rem] p-10 flex flex-col h-full border border-white/5">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-8 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg">
            Más Popular
          </div>
          <div className="mb-10 text-center">
            <h3 className="text-3xl font-black text-white mb-4">Plan LATAM</h3>
            <div className="flex items-center justify-center gap-1">
              <span className="text-6xl font-black text-white">$19</span>
              <span className="text-slate-500 font-bold text-lg">USD</span>
            </div>
            <p className="text-slate-500 mt-4 text-sm font-medium">Acceso inmediato y de por vida.</p>
          </div>
          <ul className="space-y-5 mb-12 flex-grow">
            {[
              "3 Sesiones Intensivas Master",
              "Grabaciones en 4K de por vida",
              "Material PDF y Templates",
              { text: "Bono Regalo $50 USD", highlight: true }
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-300">
                <CheckCircle2 className={cn("w-5 h-5", typeof item === 'object' ? "text-yellow-400" : "text-yellow-400/50")} />
                <span className={cn("font-light", typeof item === 'object' && "font-black text-yellow-400")}>
                  {typeof item === 'object' ? item.text : item}
                </span>
              </li>
            ))}
          </ul>
          <button className="w-full bg-yellow-400 text-black font-black py-5 rounded-2xl shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:scale-[1.02] transition-all uppercase tracking-tighter">
            Comenzar Reto Ahora
          </button>
        </div>
      </div>

      {/* Plan Premium */}
      <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 flex flex-col border border-white/10">
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-white mb-4">Plan Premium</h3>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-black text-white">$47</span>
            <span className="text-slate-500 font-bold">USD</span>
          </div>
          <p className="text-slate-500 mt-4 text-sm">Para una aceleración personalizada.</p>
        </div>
        <ul className="space-y-5 mb-12 flex-grow text-slate-400">
          <li className="flex items-center gap-4">
            <Star className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-white">Todo el Plan LATAM</span>
          </li>
          {["Revisión de CV por expertos", "Sesión Q&A Privada", "Directorio de 500+ Empresas"].map((item, i) => (
            <li key={i} className="flex items-center gap-4">
              <CheckCircle2 className="w-5 h-5 text-slate-600" />
              <span className="font-light">{item}</span>
            </li>
          ))}
        </ul>
        <button className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-5 rounded-2xl border border-white/10 transition-all uppercase tracking-widest text-sm">
          Acceder Premium
        </button>
      </div>
    </div>
  </motion.div>
);

const Instructor = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-7xl mx-auto px-6 py-12 lg:py-24"
  >
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <span className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase flex items-center gap-2">
            <span className="w-8 h-[1px] bg-cyan-400"></span>
            Instructor & Autoridad
          </span>
          <h2 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white">
            Aprende con expertos en <span className="text-yellow-400 italic">trabajo remoto</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
            Remotos Academy es un ecosistema global presente en 22 países diseñado para transformar tu carrera profesional a través de la experiencia real.
          </p>
        </div>
        <button className="w-fit bg-yellow-400 text-black px-10 py-5 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-lg shadow-yellow-400/20">
          Ver el Reto Remoto
        </button>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/40 to-yellow-400/40 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
          <img 
            alt="Instructor" 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2a] via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 flex items-center gap-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center text-xs font-bold text-white shadow-lg">+22</div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-yellow-400 shadow-lg"></div>
            </div>
            <span className="text-sm font-bold text-white">Mentores activos en vivo</span>
          </div>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        { icon: <Globe className="w-8 h-8" />, title: "Comunidad Global", desc: "Conexión directa con profesionales en 22 países de habla hispana." },
        { icon: <Verified className="w-8 h-8" />, title: "Mentores Activos", desc: "Expertos que trabajan actualmente en empresas remotas líderes." },
        { icon: <Eye className="w-8 h-8" />, title: "Implementación Real", desc: "Transparencia total en cada paso. Mostramos procesos reales." }
      ].map((item, i) => (
        <div key={i} className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 group hover:border-cyan-400/50 transition-all">
          <div className="w-14 h-14 bg-cyan-400/20 rounded-xl flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform">
            {item.icon}
          </div>
          <h4 className="text-2xl font-bold mb-4 text-white">{item.title}</h4>
          <p className="text-slate-400 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

// --- MAIN APP ---

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'inicio', label: 'Inicio', icon: <Rocket className="w-4 h-4" /> },
    { id: 'contenido', label: 'Contenido', icon: <Zap className="w-4 h-4" /> },
    { id: 'precios', label: 'Precios', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'instructor', label: 'Instructor', icon: <Users className="w-4 h-4" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'inicio': return <Hero onAction={() => setActiveTab('precios')} />;
      case 'contenido': return <Contenido />;
      case 'precios': return <Precios />;
      case 'instructor': return <Instructor />;
      default: return <Hero onAction={() => setActiveTab('precios')} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050510] font-sans text-slate-300 selection:bg-yellow-400/30 selection:text-yellow-400 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a2a]/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => setActiveTab('inicio')}
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,204,0,0.3)] group-hover:scale-110 transition-transform">
              <Rocket className="w-6 h-6 font-bold" />
            </div>
            <h2 className="text-xl font-black tracking-tighter text-white uppercase">
              Remotos<span className="text-yellow-400 italic">Academy</span>
            </h2>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 uppercase tracking-widest",
                  activeTab === tab.id 
                    ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/20" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button className="px-6 py-2.5 border border-white/10 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:border-yellow-400/50 hover:text-yellow-400 transition-all">
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0a2a] border-t border-white/5 overflow-hidden"
            >
              <div className="px-6 py-6 space-y-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      "w-full px-5 py-4 rounded-2xl text-left font-bold transition-all flex items-center gap-4 uppercase tracking-widest",
                      activeTab === tab.id 
                        ? "bg-yellow-400 text-black" 
                        : "text-slate-400 hover:bg-white/5"
                    )}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Area */}
      <main className="pt-24 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center text-yellow-400">
              <Rocket className="w-5 h-5" />
            </div>
            <span className="text-white font-black text-lg uppercase tracking-[0.2em]">Remotos Academy</span>
          </div>
          
          <div className="flex gap-10 mb-10 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Cookies</a>
          </div>
          
          <p className="text-slate-600 text-xs text-center font-medium max-w-2xl leading-relaxed">
            © 2024 Remotos Academy. Implementación real para carreras globales. Todos los derechos reservados.
            <br />
            Este sitio no es parte del ecosistema de grandes redes sociales comerciales.
          </p>
        </div>
      </footer>
    </div>
  );
}
