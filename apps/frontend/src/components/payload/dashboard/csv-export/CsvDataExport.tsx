"use client"
import React from 'react'
import './styles.scss'
import { useCsvDataExport } from './useCsvDataExport'

function CsvDataExport() {
  const { pagesCount, setPagesCount, isSyncing, isModalOpen, setIsModalOpen, submitToSheet } = useCsvDataExport()

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="csv-modal-trigger">
        Sync to Google Sheet
      </button>
      {isModalOpen ? (
        <div className="csv-modal">
          <label htmlFor="pages-count" className="csv-modal-label">Number of pages to sync</label>
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
          <button
            onClick={() => submitToSheet()}
            className="csv-export-button"
            disabled={isSyncing || !pagesCount}
          >
            {isSyncing ? 'Syncing...' : 'Sync to Google Sheet'}
          </button>
          <button onClick={() => setIsModalOpen(false)} className="csv-modal-close" disabled={isSyncing}>
            Close
          </button>
        </div>
      ) : null}
    </div>
  )
}
export default CsvDataExport
