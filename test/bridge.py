import httpx

hop_service_base_url = "http://127.0.0.1:3000"
wallet_api_base_url = "http://127.0.0.1:5099"

res = httpx.get(wallet_api_base_url + "/Bank/GetWalletByRoleId?roleId=3090").json()
res = httpx.post(
    hop_service_base_url + "/bridge",
    json={
        "amount": 0.0001 * 10**18,
        "fromChain": "Ethereum",
        "toChain": "Optimism",
        "privateKey": res["data"]["private_key"],
    },
    timeout=300,
)
# res = httpx.get(
#     hop_service_base_url + "/getHello", params={"fromChain": "Ethereum"}
# ).text
print(res)
