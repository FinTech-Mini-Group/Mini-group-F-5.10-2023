import React, { useState } from 'react';
import { icons } from '../utilits/icons';

function Share() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyLink = () => {
    // Копирование текущего URL в буфер обмена
    navigator.clipboard.writeText(window.location.href);
    // Закрытие панели после копирования
    setIsOpen(false);
  };

  const handleShareTelegram = () => {
    // Открыть Telegram с готовым сообщением, включающим ссылку на текущую страницу
    window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}`, '_blank');
    // Закрытие панели после поделиться через Telegram
    setIsOpen(false);
  };

  const handleShareFacebook = () => {
    // Открыть Facebook с возможностью создать новую запись и добавить ссылку на текущую страницу
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
    // Закрытие панели после поделиться через Facebook
    setIsOpen(false);
  };

  const handleShareInstagram = () => {
    // Открыть Instagram с возможностью создать новую запись и добавить ссылку на текущую страницу
    window.open(`https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`, '_blank');
    // Закрытие панели после поделиться через Instagram
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <button onClick={() => setIsOpen(!isOpen)} className='p-[10px] border-[1px] border-solid rounded-[4px] mr-5'>{icons.share}</button>
      {isOpen && (
        <div className="absolute left-[-223px] shadow-2xl">
          <div className='bg-white p-5 rounded-[10px]'>
            <h2 className='text-Body mb-5'>Поделиться с друзьями:</h2>
            <div className='flex items-center'>
              <div className=''>
                <button onClick={handleCopyLink} className='flex mb-[10px] mr-[10px] text-Body'> <span className='mr-[10px]'>{icons.square}</span> Скопировать ссылку</button>
                <button onClick={handleShareTelegram} className=' flex mb-[10px] mr-[10px] text-Body'> <span className='mr-[10px]'>{icons.telegram2}</span> Telegram</button>
                <button onClick={handleShareFacebook} className=' flex mb-[10px] mr-[10px] text-Body'> <span className='mr-[10px]'>{icons.facebook2}</span> Facebook</button>
                <button className='flex text-Body' onClick={handleShareInstagram}> <span className='mr-[10px]'>{icons.Instagram2}</span>Instagram</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Share;