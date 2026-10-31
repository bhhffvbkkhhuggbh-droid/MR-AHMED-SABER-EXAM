import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Users, Settings, Plus, Trash2, Edit, Save, CheckCircle, 
  Clock, AlertCircle, FileText, Download, ShieldCheck, Lock, 
  LogOut, Check, X, ChevronRight, Globe, Key, RefreshCw 
} from 'lucide-react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [currentView, setCurrentView] = useState('home'); // home, admin, student_exam
  const [lang, setLang] = useState('ar');

  // بيانات الدولة والواجهة
  const t = {
    title: lang === 'ar' ? 'منصة مستر أحمد صابر' : 'Mr. Ahmed Saber Platform',
    subtitle: lang === 'ar' ? 'للإمتحانات الإلكترونية الاحترافية' : 'Professional Online Exams',
    adminLogin: lang === 'ar' ? 'دخول لوحة التحكم' : 'Admin Login',
    studentEnter: lang === 'ar' ? 'دخول الطالب للامتحان' : 'Student Portal',
    password: lang === 'ar' ? 'كلمة المرور' : 'Password',
    loginBtn: lang === 'ar' ? 'دخول' : 'Login',
    errorPass: lang === 'ar' ? 'كلمة المرور غير صحيحة (افتراضي: 123456)' : 'Incorrect Password (default: 123456)',
    backHome: lang === 'ar' ? 'الرئيسية' : 'Home'
  };

  return (
    <div className={`min-h-screen bg-slate-900 text-slate-100 font-sans ${lang === 'ar' ? 'rtl' : 'ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* شريط التنقل العلوي */}
      <header className="bg-slate-800 border-b border-slate-700 p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-3 space-x-reverse">
          <BookOpen className="w-8 h-8 text-amber-400" />
          <div>
            <h1 className="text-xl font-bold text-white">MR AHMED SABER</h1>
            <p className="text-xs text-slate-400">📞 01119084421</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 space-x-reverse">
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1 bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg text-sm transition"
          >
            <Globe className="w-4 h-4" />
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
          {currentView !== 'home' && (
            <button 
              onClick={() => { setCurrentView('home'); setIsAdmin(false); }}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-4 py-1.5 rounded-lg text-sm transition"
            >
              {t.backHome}
            </button>
          )}
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="container mx-auto p-4 max-w-5xl mt-6">
        {currentView === 'home' && (
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {/* بطاقة دخول المدرس */}
            <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="bg-amber-500/10 p-3 w-fit rounded-xl mb-4 text-amber-400">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{t.adminLogin}</h2>
                <p className="text-slate-400 text-sm mb-6">إدارة الامتحانات، إضافة الأسئلة، وتتبع درجات الطلاب.</p>
              </div>
              <div className="space-y-4">
                <input 
                  type="password" 
                  placeholder={t.password} 
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500"
                />
                <button 
                  onClick={() => {
                    if (adminPassword === '123456') {
                      setIsAdmin(true);
                      setCurrentView('admin');
                    } else {
                      alert(t.errorPass);
                    }
                  }}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold p-3 rounded-lg transition"
                >
                  {t.loginBtn}
                </button>
              </div>
            </div>

            {/* بطاقة دخول الطالب */}
            <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="bg-blue-500/10 p-3 w-fit rounded-xl mb-4 text-blue-400">
                  <Users className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{t.studentEnter}</h2>
                <p className="text-slate-400 text-sm mb-6">دخول الطالب لأداء الامتحان المخصص بالكود السري.</p>
              </div>
              <button 
                onClick={() => alert('اختر الامتحان المطلوب من الرابط المرسل من مستر أحمد.')}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold p-3 rounded-lg transition"
              >
                دخول الامتحان
              </button>
            </div>
          </div>
        )}

        {currentView === 'admin' && isAdmin && (
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">لوحة تحكم مستر أحمد صابر</h2>
            <p className="text-slate-300 mb-6">أهلاً بك يا مستر أحمد. تم تسجيل الدخول بنجاح.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                <h3 className="font-bold text-lg text-amber-400 mb-2">الامتحانات النشطة</h3>
                <p className="text-slate-400 text-sm">لا توجد امتحانات حالياً. ابدأ بإنشاء امتحان جديد.</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                <h3 className="font-bold text-lg text-blue-400 mb-2">إدارة الطلاب</h3>
                <p className="text-slate-400 text-sm">أضف أسماء الطلاب والأكواد الخاصة بهم.</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                <h3 className="font-bold text-lg text-emerald-400 mb-2">النتائج والتقارير</h3>
                <p className="text-slate-400 text-sm">مراجعة درجات الطلاب وتصديرها لملف Excel.</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
