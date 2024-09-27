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
import DatePicker from "./DatePicker";
import InputUserName from "./InputUserName";
import InputEmail from "./InputEmail";

  
  const BtnSignup = () => {
    return(
        <AlertDialog>
            <AlertDialogTrigger>
            <button className="p-2 bg-primary rounded">
                S`inscrire
            </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-dark border-none">
                <AlertDialogHeader>
                <AlertDialogTitle>Inscription</AlertDialogTitle>
                <AlertDialogDescription className="space-y-5">
                    <InputUserName />
                    <InputEmail />
                    <DatePicker />
                    <input type="file" className="file-input file-input-bordered  w-full bg-[#141414] text-white" />
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel className="bg-red-500 hover:bg-red-500/80 hover:text-white border-none">Fermer</AlertDialogCancel>
                <AlertDialogAction className="bg-green hover:bg-green/80">S'inscrire</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
  }

  export default BtnSignup;