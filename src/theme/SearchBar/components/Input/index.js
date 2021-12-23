import React from "react";

import styles from "./index.module.scss";

import IconClear from "../../icons/clear.svg";
import IconSearch from "../../icons/search.svg";

const Input = ({
  query,
  setQuery,
  searchFormEl,
  searchInputEl,
  closeSearch,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp":
      case "ArrowDown":
        e.preventDefault();
    }
  };

  const handleReset = (e) => {
    setQuery("");
    e.preventDefault();
  };

  return (
    <div className={styles.input}>
      <form onSubmit={handleSubmit} onReset={handleReset} ref={searchFormEl}>
        <label>
          <IconSearch
            className={`${styles.icon} ${query ? styles.active : ""}`}
          />
          <input
            type="text"
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            placeholder="搜索文档"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            ref={searchInputEl}
          />
        </label>
        {query && (
          <button
            className={styles.clearButton}
            type="reset"
            title="清除搜索词"
          >
            <IconClear />
          </button>
        )}
      </form>
      <div className={styles.divider} />
      <button className={styles.cancelButton} onClick={closeSearch}>
        取消
      </button>
    </div>
  );
};

export default Input;