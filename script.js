document.getElementById("connectBtn").addEventListener("click", async () => {
  const status = document.getElementById("status");
  status.textContent = "Status: Connecting...";

  try {
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ services: ["heart_rate"] }]
    });

    const server = await device.gatt.connect();
    status.textContent = "Status: Connected";

    // Simulated sensor reading (for real device, fetch characteristics)
    setInterval(() => {
      document.getElementById("heartRate").textContent = Math.floor(60 + Math.random() * 20);
      document.getElementById("temperature").textContent = (36 + Math.random()).toFixed(2);
      document.getElementById("radiation").textContent = (0.1 + Math.random() * 0.2).toFixed(3);
    }, 2000);
  } catch (error) {
    status.textContent = "Status: Connection failed";
    console.error(error);
  }
});
