"""Inline everything into one portable HTML file (for preview / offline use)."""
import base64, pathlib, re
H = pathlib.Path(__file__).parent
css = (H/'styles.css').read_text(encoding='utf-8')
for name in ['InstrumentSans','AlmaraiR','AlmaraiB','AlmaraiXB']:
    b64 = base64.b64encode((H/'assets/fonts'/f'{name}.woff2').read_bytes()).decode()
    css = css.replace(f'assets/fonts/{name}.woff2', f'data:font/woff2;base64,{b64}')
html = (H/'index.html').read_text(encoding='utf-8')
html = html.replace('<link rel="stylesheet" href="styles.css">', '<style>\n'+css+'\n</style>')
html = html.replace('<script src="figures.js"></script>', '<script>\n'+(H/'figures.js').read_text(encoding='utf-8')+'\n</script>')
html = html.replace('<script src="content.js"></script>', '<script>\n'+(H/'content.js').read_text(encoding='utf-8')+'\n</script>')
html = html.replace('<script src="app.js"></script>', '<script>\n'+(H/'app.js').read_text(encoding='utf-8')+'\n</script>')
out = H/'landed-preview.html'; out.write_text(html, encoding='utf-8')
print('wrote', out.name, round(len(html.encode())/1024), 'KB')
