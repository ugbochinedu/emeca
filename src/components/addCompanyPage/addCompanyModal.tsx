import check from '../../assets/addCompanyModalAssets/check.png'
import Image from 'next/image'
import { Nunito_Sans } from "next/font/google";
import Link from 'next/link';

const nunito_sans = Nunito_Sans({
    weight: '400',
    subsets: ['latin'],
  })

const AddCompanyModal = () => {
    return (
        <div>
            
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
                <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-96">
                    <form method="dialog" className={nunito_sans.className}>
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4">✕</button>
                    </form>
                
                    <Image 
                        src={check}  
                        width={50}
                        height={50}
                        className='checkImg'
                        alt="Picture of the author"/>
                        <div className={nunito_sans.className}>
                    <h3 className="addCompany" >Add company</h3>
                    <p className="py-4 addCompanySub">Increase the confidence and trust of buyers by adding your company account on meca </p>
                    <div className='modalbtn gap-y-3 text-lg font-semibold'>
                    <form method="dialog" className={nunito_sans.className}>
                        <button className='btn text-primary w-40  min-h-12 rounded-full maybebtn'>
                            Maybe later
                        </button>
                    </form>

                    <Link href="addCompanyPage/addCompanyDetails">
                        <button className='btn btn-primary rounded-full w-40 min-h-12 continuebtn'>
                            Continue
                        </button>
                    </Link>
                    </div>
                </div>
                </div>
                </dialog>
        </div>
    )
}

export default AddCompanyModal
