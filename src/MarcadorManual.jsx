
import { useState } from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MarcadorManual() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Guía del Marcador Andalucía</h1>
      <ScrollArea className="mb-6 max-h-20 border rounded p-2">
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><a href="#puntos">1. Puntos</a></li>
          <li><a href="#tiempo">2. Tiempo</a></li>
          <li><a href="#menu">3. Display de menú</a></li>
          <li><a href="#faltas">4. Menú de faltas, tiempos y periodo</a></li>
          <li><a href="#deporte">5. Tipo de deporte y tiempo</a></li>
          <li><a href="#aclaraciones">6. Aclaraciones</a></li>
        </ul>
      </ScrollArea>

      <Accordion type="single" collapsible value={expanded} onValueChange={setExpanded}>
        <AccordionItem value="puntos" id="puntos" className="mb-4">
          <h2 className="text-xl font-semibold">1. Puntos</h2>
          <p className="mt-2 text-sm">
            Para subir o bajar puntos usa los 5 botones del extremo izquierdo. Los dos rojos son para el equipo local, los dos verdes para el visitante. Pulsa el botón superior (+) para sumar. Para que se actualice el marcador, pulsa <strong>RESULT</strong>.
          </p>
        </AccordionItem>

        <AccordionItem value="tiempo" id="tiempo" className="mb-4">
          <h2 className="text-xl font-semibold">2. Tiempo</h2>
          <p className="mt-2 text-sm">
            Usa <strong>STOP</strong> (rojo) para detener el tiempo y <strong>START</strong> (verde) para iniciarlo. Entre cuartos se asignan automáticamente 2 minutos y 15 en el descanso. Para resetear esos tiempos, usa el botón encima de START/STOP. La bocina se activa manualmente con el botón del megáfono.
          </p>
        </AccordionItem>

        <AccordionItem value="menu" id="menu" className="mb-4">
          <h2 className="text-xl font-semibold">3. Display de menú</h2>
          <p className="mt-2 text-sm">
            Cambia entre tipos de menú pulsando <strong>MENU</strong>. Según el menú activo verás distintos datos.
          </p>
        </AccordionItem>

        <AccordionItem value="faltas" id="faltas" className="mb-4">
          <h2 className="text-xl font-semibold">4. Menú de faltas, tiempos y periodo</h2>
          <p className="mt-2 text-sm">
            <strong>Faltas:</strong> Pulsa <strong>C</strong> (local) o <strong>D</strong> (visitante), introduce el dorsal (0-9) con el teclado y pulsa <strong>ENTER</strong>. <br/>
            <strong>Tiempos muertos:</strong> Pulsa <strong>F</strong> o <strong>G</strong>, se mostrará 1 minuto. A los 10 seg sonará la bocina. <br/>
            <strong>Periodo:</strong> Pulsa <strong>E</strong> para cambiarlo manualmente.
          </p>
        </AccordionItem>

        <AccordionItem value="deporte" id="deporte" className="mb-4">
          <h2 className="text-xl font-semibold">5. Tipo de deporte y tiempo</h2>
          <p className="mt-2 text-sm">
            Para cambiar el deporte, usa los botones <strong>A</strong> o <strong>B</strong> hasta que aparezca "BASKET". Para modificar el tiempo, pulsa <strong>E</strong>, introduce el nuevo valor y pulsa <strong>ENTER</strong>.
          </p>
        </AccordionItem>

        <AccordionItem value="aclaraciones" id="aclaraciones" className="mb-4">
          <h2 className="text-xl font-semibold">6. Aclaraciones</h2>
          <p className="mt-2 text-sm">
            - Puedes usar los 10 minutos del 3er cuarto como descanso si eliminas los 15 minutos automáticos. <br/>
            - Para restar faltas o volver a un periodo anterior: deja pulsado <strong>F1</strong> y pulsa el botón correspondiente.
          </p>
        </AccordionItem>
      </Accordion>

      <div className="text-center mt-6">
        <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Volver arriba
        </Button>
      </div>
    </div>
  );
}
