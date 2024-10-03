document.getElementById('ai-suggested').addEventListener('click', async () => {
    const userCode = ''; // Get the user's code from your editor
    const response = await fetch('/api/suggest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({ code: userCode })
    });
    
    const suggestion = await response.json();
  
    // Open a new tab and display the suggestions
    const newTab = window.open('', '_blank');
    newTab.document.write(`<pre>${suggestion.code}</pre>`);
    newTab.document.write(`<p>${suggestion.message}</p>`);
  });
  