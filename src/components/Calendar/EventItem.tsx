import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  UserEvent,
  deleteUserEvent,
  updateUserEvent,
} from '../../redux/user-events';

interface Props {
  event: UserEvent;
}

const EventItem: React.FC<Props> = ({ event }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(event.title);

  const handleDeleteClick = () => {
    dispatch<any>(deleteUserEvent(event.id));
  };

  const handleTitleClick = () => {
    setEditable(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    if (title !== event.title) {
      dispatch<any>(updateUserEvent({ ...event, title }));
    }
    setEditable(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editable) {
      inputRef.current?.focus();
    }
  }, [editable]);
  return (
    <div key={event.id} className="calendar-event">
      <div className="caaalendar-event-info">
        <div className="calendar-event-time">10:00 - 12:00</div>
        <div className="calendar-event-title">
          {editable ? (
            <input
              type="text"
              ref={inputRef}
              value={title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ) : (
            <span onClick={handleTitleClick}>{title}</span>
          )}
        </div>
      </div>
      <button
        onClick={handleDeleteClick}
        className="calendar-event-delete-button"
      >
        &times;
      </button>
    </div>
  );
};

export default EventItem;
