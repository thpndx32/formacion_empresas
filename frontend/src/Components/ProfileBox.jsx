import { ProfileBoxContainer } from "../Styles/components/profileBox";
export const ProfileBox = (
    usr,
    refer,
) => {
    console.log(usr);
    return (
        <>
                {usr.user.displayName}
        </>
    )
}