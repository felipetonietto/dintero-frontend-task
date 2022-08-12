const username = import.meta.env.VITE_QUICKR_API_KEY;
const password = import.meta.env.VITE_QUICKR_API_SECRET;


let token = '';
let tenant = '';
let expiresAt = 0;

const defaultHeaders = {
    "User-Agent": "dintero-frontend-test",
    "Accept": "application/json"
}

const getAccessTokenData = async () => {
    if(!username || !password) {
        throw new Error('Missing environment variables fior quickr auth');
    }
    if(token && tenant && expiresAt > Date.now()) {
        return {token, tenant};
    }
    const response = await fetch('/quickr-api/user/login', {
        method: 'POST',
        headers: {...defaultHeaders, 'Content-Type': 'application/json'},
        body: JSON.stringify({
            username,
            password
        })
    });
    const json = await response.json();
    if(!json?.data?.idToken){
        throw new Error('Authentication failed');
    }
    token = json?.data?.idToken;
    tenant = json?.data?.tenantGroups.find((t:{id: string}) => t).id;
    expiresAt = Date.now() + (json.data.expires_in * 1000);
    return {token, tenant}
}

export const checkAccountNumber = async (organizationNumber: string, accountNumber: string) => {
    const {token, tenant} = await getAccessTokenData();
    const response = await fetch(`/quickr-api/search/bank-account/${organizationNumber}/${accountNumber}`, {
        headers: {
            ...defaultHeaders,
            "Authorization": `Bearer ${token}`,
            "Tenant": tenant
        },
    });
    const json = await response.json();
    return json?.organizationOwnsAccount || false;
};
