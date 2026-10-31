import React, { useState } from 'react';

export default function App() {
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#ffffff', minHeight: '100vh', fontFamily: 'Cairo, sans-serif', padding: '20px', direction: 'rtl' }}>
      <header style={{ borderBottom: '1px solid #334155', paddingBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '22px', color: '#f59e0b' }}>منصة مستر أحمد صابر</h1>
        <span style={{ fontSize: '14px', color: '#94a3b8' }}>📞 01119084421</span>
      </header>

      <main style={{ maxWidth: '600px', margin: '40px auto', backgroundColor: '#1e293b', padding: '30px', borderRadius: '15px', border: '1px solid #334155' }}>
        {!isAdmin ? (
          <div>
            <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>دخول لوحة التحكم</h2>
            <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '20px' }}>أدخل كلمة المرور (الافتراضية: 123456)</p>
            <input 
              type="password" 
              placeholder="كلمة المرور" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#0f172a', border: '1px solid #475569', color: '#fff', marginBottom: '15px', boxSizing: 'border-box' }}
            />
            <button 
              onClick={() => {
                if (password === '123456') {
                  setIsAdmin(true);
                } else {
                  alert('كلمة المرور غير صحيحة');
                }
              }}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#f59e0b', color: '#0f172a', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
            >
              دخول
            </button>
          </div>
        ) : (
          <div>
            <h2 style={{ fontSize: '20px', color: '#10b981', marginBottom: '15px' }}>أهلاً بك يا مستر أحمد!</h2>
            <p style={{ color: '#cbd5e1' }}>تم تسجيل الدخول بنجاح إلى لوحة التحكم الخاصة بالامتحانات.</p>
            <button 
              onClick={() => setIsAdmin(false)}
              style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
            >
              تسجيل الخروج
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
