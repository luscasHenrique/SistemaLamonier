import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { format, addDays, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale'; // Importe o módulo de localização em português
import './dataSelector.css';

function DateSelector({ selectedDate, onDateChange }) {
  const handlePreviousDate = () => {
    const previousDate = subDays(selectedDate, 1);
    onDateChange(previousDate);
  };

  const handleNextDate = () => {
    const nextDate = addDays(selectedDate, 1);
    onDateChange(nextDate);
  };

  return (
    <div className="date-selector">
      <FiChevronLeft className="date-selector-icon" onClick={handlePreviousDate} />
      <span className="date-selector-date">
        {format(selectedDate, 'PP', { locale: ptBR })}
      </span>
      <FiChevronRight className="date-selector-icon" onClick={handleNextDate} />
    </div>
  );
}

export default DateSelector;
