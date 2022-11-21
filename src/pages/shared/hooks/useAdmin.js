const { useState, useEffect } = require("react")

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoasding] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/dashboard/allusers/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsAdmin(data.isAdmin)
                    setAdminLoasding(false)
                })
        }
    }, [email])
    return [isAdmin, adminLoading]
}
export default useAdmin;