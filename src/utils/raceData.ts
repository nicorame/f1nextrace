// src/utils/raceData.ts

export interface RaceSession {
  gp: string;
  fecha: string;
  sesion: string;
  hora: string;
}

export const raceCalendar: RaceSession[] = [
  // Australia
  { gp: "Australia", fecha: "05/03/2026", sesion: "FP1", hora: "22:30" },
  { gp: "Australia", fecha: "06/03/2026", sesion: "FP2", hora: "2:00" },
  { gp: "Australia", fecha: "06/03/2026", sesion: "FP3", hora: "22:30" },
  { gp: "Australia", fecha: "07/03/2026", sesion: "Clasificación", hora: "2:00" },
  { gp: "Australia", fecha: "08/03/2026", sesion: "Carrera", hora: "1:00" },
  
  // China
  { gp: "China", fecha: "13/03/2026", sesion: "FP1", hora: "0:30" },
  { gp: "China", fecha: "13/03/2026", sesion: "Qualy Sprint", hora: "4:30" },
  { gp: "China", fecha: "14/03/2026", sesion: "Sprint", hora: "0:00" },
  { gp: "China", fecha: "14/03/2026", sesion: "Clasificación", hora: "4:00" },
  { gp: "China", fecha: "15/03/2026", sesion: "Carrera", hora: "4:00" },
  
  // Japón
  { gp: "Japón", fecha: "26/03/2026", sesion: "FP1", hora: "23:30" },
  { gp: "Japón", fecha: "27/03/2026", sesion: "FP2", hora: "3:00" },
  { gp: "Japón", fecha: "27/03/2026", sesion: "FP3", hora: "23:30" },
  { gp: "Japón", fecha: "28/03/2026", sesion: "Clasificación", hora: "3:00" },
  { gp: "Japón", fecha: "29/03/2026", sesion: "Carrera", hora: "2:00" },
  
  // Bahrein
  { gp: "Bahrein", fecha: "10/04/2026", sesion: "FP1", hora: "8:30" },
  { gp: "Bahrein", fecha: "10/04/2026", sesion: "FP2", hora: "12:00" },
  { gp: "Bahrein", fecha: "11/04/2026", sesion: "FP3", hora: "9:30" },
  { gp: "Bahrein", fecha: "11/04/2026", sesion: "Clasificación", hora: "13:00" },
  { gp: "Bahrein", fecha: "12/04/2026", sesion: "Carrera", hora: "12:00" },
  
  // Arabia Saudita
  { gp: "Arabia Saudita", fecha: "17/04/2026", sesion: "FP1", hora: "10:30" },
  { gp: "Arabia Saudita", fecha: "17/04/2026", sesion: "FP2", hora: "14:00" },
  { gp: "Arabia Saudita", fecha: "18/04/2026", sesion: "FP3", hora: "10:30" },
  { gp: "Arabia Saudita", fecha: "18/04/2026", sesion: "Clasificación", hora: "14:00" },
  { gp: "Arabia Saudita", fecha: "19/04/2026", sesion: "Carrera", hora: "14:00" },
  
  // Miami
  { gp: "Miami", fecha: "01/05/2026", sesion: "FP1", hora: "13:30" },
  { gp: "Miami", fecha: "01/05/2026", sesion: "Qualy Sprint", hora: "17:30" },
  { gp: "Miami", fecha: "02/05/2026", sesion: "Sprint", hora: "13:00" },
  { gp: "Miami", fecha: "02/05/2026", sesion: "Clasificación", hora: "17:00" },
  { gp: "Miami", fecha: "03/05/2026", sesion: "Carrera", hora: "17:00" },
  
  // Canadá
  { gp: "Canadá", fecha: "22/05/2026", sesion: "FP1", hora: "13:30" },
  { gp: "Canadá", fecha: "22/05/2026", sesion: "Qualy Sprint", hora: "17:30" },
  { gp: "Canadá", fecha: "23/05/2026", sesion: "Sprint", hora: "13:00" },
  { gp: "Canadá", fecha: "23/05/2026", sesion: "Clasificación", hora: "17:00" },
  { gp: "Canadá", fecha: "24/05/2026", sesion: "Carrera", hora: "17:00" },
  
  // Mónaco
  { gp: "Mónaco", fecha: "05/06/2026", sesion: "FP1", hora: "8:30" },
  { gp: "Mónaco", fecha: "06/06/2026", sesion: "FP2", hora: "12:00" },
  { gp: "Mónaco", fecha: "06/06/2026", sesion: "FP3", hora: "7:30" },
  { gp: "Mónaco", fecha: "06/06/2026", sesion: "Clasificación", hora: "11:00" },
  { gp: "Mónaco", fecha: "07/06/2026", sesion: "Carrera", hora: "10:00" },
  
  // Barcelona
  { gp: "Barcelona", fecha: "12/06/2026", sesion: "FP1", hora: "8:30" },
  { gp: "Barcelona", fecha: "13/06/2026", sesion: "FP2", hora: "12:00" },
  { gp: "Barcelona", fecha: "13/06/2026", sesion: "FP3", hora: "7:30" },
  { gp: "Barcelona", fecha: "14/06/2026", sesion: "Clasificación", hora: "11:00" },
  { gp: "Barcelona", fecha: "14/06/2026", sesion: "Carrera", hora: "10:00" },
  
  // Austria
  { gp: "Austria", fecha: "26/06/2026", sesion: "FP1", hora: "7:30" },
  { gp: "Austria", fecha: "26/06/2026", sesion: "Qualy Sprint", hora: "11:00" },
  { gp: "Austria", fecha: "27/06/2026", sesion: "Sprint", hora: "7:30" },
  { gp: "Austria", fecha: "27/06/2026", sesion: "Clasificación", hora: "11:00" },
  { gp: "Austria", fecha: "28/06/2026", sesion: "Carrera", hora: "10:00" },
  
  // Gran Bretaña
  { gp: "Gran Bretaña", fecha: "03/07/2026", sesion: "FP1", hora: "8:30" },
  { gp: "Gran Bretaña", fecha: "04/07/2026", sesion: "FP2", hora: "12:00" },
  { gp: "Gran Bretaña", fecha: "04/07/2026", sesion: "Sprint", hora: "11:00" },
  { gp: "Gran Bretaña", fecha: "04/07/2026", sesion: "Qualy Sprint", hora: "11:00" },
  { gp: "Gran Bretaña", fecha: "05/07/2026", sesion: "Clasificación", hora: "11:00" },
  { gp: "Gran Bretaña", fecha: "05/07/2026", sesion: "Carrera", hora: "11:00" },
  
  // Bélgica
  { gp: "Bélgica", fecha: "17/07/2026", sesion: "FP1", hora: "8:30" },
  { gp: "Bélgica", fecha: "17/07/2026", sesion: "FP2", hora: "12:00" },
  { gp: "Bélgica", fecha: "18/07/2026", sesion: "FP3", hora: "7:30" },
  { gp: "Bélgica", fecha: "18/07/2026", sesion: "Clasificación", hora: "11:00" },
  { gp: "Bélgica", fecha: "19/07/2026", sesion: "Carrera", hora: "10:00" },
  
  // Hungría
  { gp: "Hungría", fecha: "24/07/2026", sesion: "FP1", hora: "8:30" },
  { gp: "Hungría", fecha: "25/07/2026", sesion: "FP2", hora: "12:00" },
  { gp: "Hungría", fecha: "25/07/2026", sesion: "FP3", hora: "7:30" },
  { gp: "Hungría", fecha: "26/07/2026", sesion: "Clasificación", hora: "11:00" },
  { gp: "Hungría", fecha: "26/07/2026", sesion: "Carrera", hora: "10:00" },
  
  // Países Bajos
  { gp: "Países Bajos", fecha: "21/08/2026", sesion: "FP1", hora: "7:30" },
  { gp: "Países Bajos", fecha: "22/08/2026", sesion: "FP2", hora: "11:30" },
  { gp: "Países Bajos", fecha: "22/08/2026", sesion: "FP3", hora: "7:00" },
  { gp: "Países Bajos", fecha: "22/08/2026", sesion: "Clasificación", hora: "11:00" },
  { gp: "Países Bajos", fecha: "23/08/2026", sesion: "Carrera", hora: "10:00" },
  
  // Italia
  { gp: "Italia", fecha: "04/09/2026", sesion: "FP1", hora: "7:30" },
  { gp: "Italia", fecha: "04/09/2026", sesion: "FP2", hora: "11:00" },
  { gp: "Italia", fecha: "05/09/2026", sesion: "FP3", hora: "7:30" },
  { gp: "Italia", fecha: "05/09/2026", sesion: "Clasificación", hora: "11:00" },
  { gp: "Italia", fecha: "06/09/2026", sesion: "Carrera", hora: "10:00" },
  
  // España
  { gp: "España", fecha: "11/09/2026", sesion: "FP1", hora: "8:30" },
  { gp: "España", fecha: "11/09/2026", sesion: "FP2", hora: "12:00" },
  { gp: "España", fecha: "12/09/2026", sesion: "FP3", hora: "7:30" },
  { gp: "España", fecha: "12/09/2026", sesion: "Clasificación", hora: "11:00" },
  { gp: "España", fecha: "13/09/2026", sesion: "Carrera", hora: "10:00" },
  
  // Azerbaiyán
  { gp: "Azerbaiyán", fecha: "18/09/2026", sesion: "FP1", hora: "6:30" },
  { gp: "Azerbaiyán", fecha: "19/09/2026", sesion: "FP2", hora: "10:00" },
  { gp: "Azerbaiyán", fecha: "19/09/2026", sesion: "FP3", hora: "6:30" },
  { gp: "Azerbaiyán", fecha: "20/09/2026", sesion: "Clasificación", hora: "10:00" },
  { gp: "Azerbaiyán", fecha: "20/09/2026", sesion: "Carrera", hora: "8:00" },
  
  // Singapur
  { gp: "Singapur", fecha: "02/10/2026", sesion: "FP1", hora: "6:30" },
  { gp: "Singapur", fecha: "02/10/2026", sesion: "FP2", hora: "10:00" },
  { gp: "Singapur", fecha: "03/10/2026", sesion: "Qualy Sprint", hora: "10:30" },
  { gp: "Singapur", fecha: "11/10/2026", sesion: "Clasificación", hora: "10:00" },
  { gp: "Singapur", fecha: "11/10/2026", sesion: "Sprint", hora: "9:30" },
  { gp: "Singapur", fecha: "11/10/2026", sesion: "Carrera", hora: "9:00" },
  
  // Estados Unidos
  { gp: "Estados Unidos", fecha: "23/10/2026", sesion: "FP1", hora: "18:00" },
  { gp: "Estados Unidos", fecha: "24/10/2026", sesion: "FP2", hora: "14:00" },
  { gp: "Estados Unidos", fecha: "24/10/2026", sesion: "Qualy Sprint", hora: "18:30" },
  { gp: "Estados Unidos", fecha: "25/10/2026", sesion: "Sprint", hora: "17:00" },
  { gp: "Estados Unidos", fecha: "25/10/2026", sesion: "Carrera", hora: "16:30" },
  
  // México
  { gp: "México", fecha: "30/10/2026", sesion: "FP1", hora: "16:30" },
  { gp: "México", fecha: "30/10/2026", sesion: "FP2", hora: "19:00" },
  { gp: "México", fecha: "31/10/2026", sesion: "FP3", hora: "14:30" },
  { gp: "México", fecha: "31/10/2026", sesion: "Clasificación", hora: "18:00" },
  { gp: "México", fecha: "01/11/2026", sesion: "Carrera", hora: "17:00" },
  
  // Brasil
  { gp: "Brasil", fecha: "06/11/2026", sesion: "FP1", hora: "12:30" },
  { gp: "Brasil", fecha: "06/11/2026", sesion: "FP2", hora: "16:00" },
  { gp: "Brasil", fecha: "07/11/2026", sesion: "Sprint", hora: "11:30" },
  { gp: "Brasil", fecha: "07/11/2026", sesion: "Qualy Sprint", hora: "11:30" },
  { gp: "Brasil", fecha: "08/11/2026", sesion: "Clasificación", hora: "14:00" },
  { gp: "Brasil", fecha: "08/11/2026", sesion: "Carrera", hora: "13:30" },
  
  // Las Vegas
  { gp: "Las Vegas", fecha: "20/11/2026", sesion: "FP1", hora: "1:30" },
  { gp: "Las Vegas", fecha: "21/11/2026", sesion: "FP2", hora: "5:00" },
  { gp: "Las Vegas", fecha: "21/11/2026", sesion: "FP3", hora: "1:30" },
  { gp: "Las Vegas", fecha: "22/11/2026", sesion: "Clasificación", hora: "5:00" },
  { gp: "Las Vegas", fecha: "22/11/2026", sesion: "Carrera", hora: "0:30" },
  
  // Qatar
  { gp: "Qatar", fecha: "27/11/2026", sesion: "FP1", hora: "10:30" },
  { gp: "Qatar", fecha: "28/11/2026", sesion: "Sprint", hora: "11:00" },
  { gp: "Qatar", fecha: "28/11/2026", sesion: "FP2", hora: "11:30" },
  { gp: "Qatar", fecha: "28/11/2026", sesion: "Qualy Sprint", hora: "15:00" },
  { gp: "Qatar", fecha: "29/11/2026", sesion: "Clasificación", hora: "14:00" },
  { gp: "Qatar", fecha: "29/11/2026", sesion: "Carrera", hora: "9:30" },
  
  // Abu Dhabi
  { gp: "Abu Dhabi", fecha: "04/12/2026", sesion: "FP1", hora: "6:30" },
  { gp: "Abu Dhabi", fecha: "05/12/2026", sesion: "FP2", hora: "10:00" },
  { gp: "Abu Dhabi", fecha: "05/12/2026", sesion: "FP3", hora: "7:30" },
  { gp: "Abu Dhabi", fecha: "06/12/2026", sesion: "Clasificación", hora: "11:00" },
  { gp: "Abu Dhabi", fecha: "06/12/2026", sesion: "Carrera", hora: "10:00" }
];

export function parseDate(dateStr: string, timeStr: string): Date {
  const [day, month, year] = dateStr.split('/').map(Number);
  const [hours, minutes] = timeStr.split(':').map(Number);
  return new Date(year, month - 1, day, hours, minutes);
}

export function getNextRace(): RaceSession | null {
  const now = new Date();
  const argNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
  
  for (const session of raceCalendar) {
    const sessionDate = parseDate(session.fecha, session.hora);
    if (sessionDate > argNow && session.sesion === "Carrera") {
      return session;
    }
  }
  return null;
}

export function getNextSession(): RaceSession | null {
  const now = new Date();
  const argNow = new Date(now.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
  
  for (const session of raceCalendar) {
    const sessionDate = parseDate(session.fecha, session.hora);
    if (sessionDate > argNow) {
      return session;
    }
  }
  return null;
}

export function getWeekendSessions(gp: string): RaceSession[] {
  return raceCalendar.filter(session => session.gp === gp);
}

export function groupByGP(): Map<string, RaceSession[]> {
  const grouped = new Map<string, RaceSession[]>();
  
  raceCalendar.forEach(session => {
    if (!grouped.has(session.gp)) {
      grouped.set(session.gp, []);
    }
    grouped.get(session.gp)!.push(session);
  });
  
  return grouped;
}