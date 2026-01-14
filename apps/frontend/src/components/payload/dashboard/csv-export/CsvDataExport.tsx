'use client'
import { useCsvDataExport } from './useCsvDataExport'
import React from 'react'
import './styles.scss'

function CsvDataExport() {
  const { pagesCount, setPagesCount, isSyncing, isModalOpen, setIsModalOpen, submitToSheet } =
    useCsvDataExport()

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="csv-modal-trigger">
        Sync to Google Sheet
      </button>
      {isModalOpen ? (
        <div className="csv-modal">
          <label htmlFor="pages-count" className="csv-modal-label">
            Number of pages to sync
          </label>
          <input
            type="number"
            placeholder="Enter the number of pages to sync (must be positive)"
            className="csv-modal-input"
            value={pagesCount === 0 ? '' : pagesCount}
            onChange={(e) => {
              const value = e.target.valueAsNumber
              setPagesCount(isNaN(value) || value < 0 ? 0 : value)
            }}
          />
          <div className='csv-modal-buttons'>
            <button
              onClick={() => submitToSheet()}
              className="csv-export-button"
              disabled={isSyncing || !pagesCount}
            >
              {isSyncing ? 'Syncing...' : 'Sync to Google Sheet'}
            </button>
            <a
              href="https://docs.google.com/spreadsheets/d/1kReG1Xnr85ezzJ8j38Cug_NMLr17jZN7eD1L-2dDFNY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="csv-export-button"
            >
              View Google Sheet
            </a>
          </div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="csv-modal-close"
            disabled={isSyncing}
          >
            Close
          </button>
        </div>
      ) : null}
    </div>
  )
}
export default CsvDataExport
