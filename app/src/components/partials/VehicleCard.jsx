import { TruckIcon } from '@heroicons/react/24/solid';

function VehicleCard() {
    return (
    <div>
            <button className='flex justify-center items-center w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] bg-[#201a5e]
                            lg:hover:bg-[#c8c1ff] focus:bg-[#c8c1ff] text-[#fff] focus:text-[#201a5e]'>
                <TruckIcon className="size-20"/>
            </button>
    </div> 
    )
  }
  
export default VehicleCard