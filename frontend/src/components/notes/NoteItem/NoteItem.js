import React from "react";
import styles from "./NoteItem.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NoteItem = ({
  note,
  editing,
  onToggle,
  onChange,
  onUpdate,
  onDelete
}) => {
  const handleToggle = () => {
    onToggle({ id: note.id, text: note.text });
  };

  const handleChange = e => {
    const { value } = e.target;
    onChange({ value }, true);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onUpdate();
    }
  };

  const handleDelete = e => {
    // handleToggle이 되는것을 방지
    e.stopPropagation();
    onDelete({ id: note.id });
  };
  return (
    <div
      className={cx("note-item", editing.id === note.id && "editing")}
      onClick={handleToggle}
    >
      {editing.id === note.id ? (
        <input
          type="text"
          name="note"
          value={editing.text}
          autoFocus
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <div className={cx("note")}>{note.text}</div>
      )}
      <div className={cx("delete")} onClick={handleDelete}>
        &times;
      </div>
    </div>
  );
};

export default NoteItem;
