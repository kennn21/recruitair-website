import EditProfileForm from "@/components/profile/EditProfileForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Recruitair - Edit Profile",
  };

const EditProfilePage = () => {
    return ( 
        <>
            <EditProfileForm/>
        </>
     );
}
 
export default EditProfilePage;