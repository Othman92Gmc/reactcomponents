import React from 'react'
import FranceCard from './FranceCard'
import ItalyCard from './ItalyCard'
import KingdomOfSaudiArabiaCard from './KingdomOfSaudiArabiaCard'
import MexicoCard from './MexicoCard'
import NetherlandCard from './NetherlandCard'
import SenegalCard from './SenegalCard'
import TunisiaCard from './TunisiaCard'
import UnitedArabsEmiratesCard from './UnitedArabsEmiratesCard'
import UnitedStatesOfAmericaCard from './UnitedStatesOfAmericaCard'

function ListOfDestinations() {
    return (
        <div className='Cards'>
            <FranceCard/>
            
            <TunisiaCard/>
            
            <KingdomOfSaudiArabiaCard/>
            
            <ItalyCard/>
            
            <UnitedStatesOfAmericaCard/>
            
            <UnitedArabsEmiratesCard/>
            
            <SenegalCard/>
            
            <NetherlandCard/>
            
            <MexicoCard/>
        </div>
        
    )
}

export default ListOfDestinations
