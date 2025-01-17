import React, { useState } from 'react'
import { useBuilderContext } from '../../../context/BuilderContext';
import { formatUSD } from '../../../utils/formatters/numbers';
import LyraIcon from '../../UI/Icons/Color/LYRA';
import { SelectStrikesTable } from './SelectStrikesTable';
import { StrikesTable } from './StrikesTable';
import { motion } from "framer-motion"

export const Strikes = () => {

  const {
    isBuildingNewStrategy,
    showStrikesSelect,
    strikes,
    selectedMarket,
    selectedStrategy,
    selectedExpirationDate,
    positionPnl: { netCreditDebit, maxLoss, maxProfit },
    handleBuildNewStrategy
  } = useBuilderContext();

  return <div className='col-span-3 sm:col-span-3 mt-4 grid grid-cols-6'>

    {/* profit loss data */}
    <div className="sm:col-end-7 sm:col-span-2 col-start-1 col-end-7">
      <div className="col-span-1 grid grid-cols-3 gap-3 mt-6">

        <div className="bg-zinc-800 p-4 pt-1">
          <span className="text-xs font-light text-zinc-100">{netCreditDebit && netCreditDebit > 0 ? 'Net Credit' : 'Net (Debit)'}</span>
          <div className='pt-4'>
            <span className="text-base font-semibold text-white">
              {netCreditDebit && formatUSD(Math.abs(netCreditDebit))}
            </span>
          </div>
        </div>

        <div className="bg-zinc-800 p-4 pt-1">
          <span className="text-xs font-light text-pink-700">Max Loss</span>
          <div className='pt-4'>
            <span className="text-base font-semibold text-pink-700">
              {maxLoss && formatUSD(maxLoss)}
            </span>
          </div>
        </div>

        <div className="bg-zinc-800 p-4 pt-1">
          <span className="text-xs font-light text-emerald-700">Max Profit</span>
          <div className='pt-4'>
            <span className="text-base font-semibold text-emerald-700">
              {maxProfit && formatUSD(maxProfit)}
            </span>
          </div>
        </div>
      </div>

    </div>

    {/* custom strategy button */}
    <div className="sm:col-end-7 sm:col-span-2 col-start-1 col-end-7">

      <div className="col-span-1 grid grid-cols-3 gap-3 mt-2">

        {
          selectedStrategy &&
          <div onClick={() => handleBuildNewStrategy(!isBuildingNewStrategy)} className="cursor-pointer border border-zinc-800 hover:border-emerald-700 hover:bg-zinc-800 bg-zinc-900 p-2 col-span-3 font-semibold text-xs text-white text-center rounded-2xl">
            {isBuildingNewStrategy ? 'Reset Strategy' : 'Use Strategy as Template'}
          </div>
        }

      </div>

    </div>

    {
      showStrikesSelect &&
      <motion.div className='col-span-6' animate={showStrikesSelect ? "open" : "closed"} variants={{
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }}>
        <SelectStrikesTable />
      </motion.div>

    }

    <div className='col-span-6 '>
      <div className="flex items-center pt-2 pb-2">
        <LyraIcon />
        <div className='pl-2 font-light text-xs uppercase'>
          <strong> Powered by lyra.finance </strong>
        </div>
      </div>
      <StrikesTable />
    </div>

  </div>
}

