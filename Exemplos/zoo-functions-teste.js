if(dayName !== {}){
    if(dayName !== 'Monday'){
      const diaDaSemana = data.hours[dayName];
    const days = `Open from ${diaDaSemana.open}am until ${diaDaSemana.close}pm`;
    let day = {};
    day[dayName] = days;
    return day;
    } else{
      return {'Monday': 'CLOSED'}
    }
  } else{
  return {
    'Tuesday': 'Open from 8am until 6pm',
    'Wednesday': 'Open from 8am until 6pm',
    'Thursday': 'Open from 10am until 8pm',
    'Friday': 'Open from 10am until 8pm',
    'Saturday': 'Open from 8am until 10pm',
    'Sunday': 'Open from 8am until 8pm',
    'Monday': 'CLOSED'
  };
  }