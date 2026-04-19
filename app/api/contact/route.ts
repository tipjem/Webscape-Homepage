import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Make sure to set RESEND_API_KEY in your environment variables.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { contactType, company, manager, phone, email, budget, timeline, reference, details, existingEmail, url, maintenanceDetails } = data;

    let subject = '';
    let htmlContent = '';

    if (contactType === 'new') {
      subject = `[웹스케이프 신규 제작 문의] ${company} - ${manager}님`;
      htmlContent = `
        <h2>신규 제작 문의</h2>
        <p><strong>회사명/브랜드명:</strong> ${company || '미입력'}</p>
        <p><strong>담당자 성함/직급:</strong> ${manager || '미입력'}</p>
        <p><strong>연락처:</strong> ${phone || '미입력'}</p>
        <p><strong>이메일:</strong> ${email || '미입력'}</p>
        <p><strong>희망 예산:</strong> ${budget || '미입력'}</p>
        <p><strong>희망 오픈 일정:</strong> ${timeline || '미입력'}</p>
        <p><strong>참고 스타일:</strong> ${reference || '없음'}</p>
        <br />
        <h3>세부 문의 내용</h3>
        <p>${details ? details.replace(/\n/g, '<br/>') : '없음'}</p>
      `;
    } else {
      subject = `[웹스케이프 유지보수 문의] ${company} - ${manager}님`;
      htmlContent = `
        <h2>유지보수 및 고도화 문의</h2>
        <p><strong>회사명/브랜드명:</strong> ${company || '미입력'}</p>
        <p><strong>담당자 성함/직급:</strong> ${manager || '미입력'}</p>
        <p><strong>연락처:</strong> ${phone || '미입력'}</p>
        <p><strong>기존 프로젝트 진행 이메일:</strong> ${existingEmail || '미입력'}</p>
        <p><strong>웹사이트 URL:</strong> ${url || '미입력'}</p>
        <br />
        <h3>유지보수 및 고도화 요청 사항</h3>
        <p>${maintenanceDetails ? maintenanceDetails.replace(/\n/g, '<br/>') : '없음'}</p>
      `;
    }

    const { data: resendData, error } = await resend.emails.send({
      from: 'Webscape Contact <onboarding@resend.dev>',
      to: ['tipjem@gmail.com'],
      subject: subject,
      html: htmlContent,
      replyTo: email || existingEmail,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: resendData });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
