import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { FaCheck } from "react-icons/fa6";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  
  const BtnContact = () => {
    const notify = () => toast("Message envoyé 👍🎉 !");
    return(
        <AlertDialog>
            <AlertDialogTrigger>
            <div className="w-fit p-2 relative mb-20">
                <div className="w-full h-full bg-green/40 absolute top-0 left-0 -rotate-6"></div>
                <div className="w-full h-full bg-green/40 absolute top-0 left-0 rotate-6"></div>
                Me contacter
            </div>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-dark border-none max-sm:w-[90%]">
                <AlertDialogHeader>
                <AlertDialogTitle>Contacter moi <span className="text-xl">👋</span></AlertDialogTitle>
                <AlertDialogDescription>
                    <label className="input input-bordered flex items-center gap-2 bg-[#141414] text-white">
                        Email
                        <input type="text" className="grow" placeholder="dirane@portfolio.com" />
                    </label>
                    <textarea placeholder="Votre message" className="mt-5 textarea textarea-bordered textarea-sm w-full text-white bg-[#141414]"></textarea>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel className="bg-red-500 hover:bg-red-500/80 hover:text-white border-none">Fermer</AlertDialogCancel>
                <AlertDialogAction onClick={notify} className="bg-green hover:bg-green/80">Envoyer</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
            <ToastContainer 
                closeButton={true}
                icon={<CheckCircledIcon color="green" width={20} height={20} />}
            />
        </AlertDialog>
    )
  }

  export default BtnContact;