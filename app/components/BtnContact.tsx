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

  
  const BtnContact = () => {
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
                    <textarea placeholder="Votre message" className="mt-5 textarea textarea-bordered textarea-sm w-full  bg-[#141414]"></textarea>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel className="bg-red-500 hover:bg-red-500/80 hover:text-white border-none">Fermer</AlertDialogCancel>
                <AlertDialogAction className="bg-green hover:bg-green/80">Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
  }

  export default BtnContact;