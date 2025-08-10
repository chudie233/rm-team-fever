'use client';
import React from 'react';
import Link from 'next/link';
import { Cpu, Github, Video, Mail, Globe, Link as LinkIcon, UserRound } from 'lucide-react';

export default function ElecPage() {
  return (
    <main className="min-h-screen bg-black text-white">
        <Link href="/" className="inline-block text-white/60 hover:text-white">← 返回首页</Link>

        <header className="mt-6 flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-400 via-pink-500 to-rose-600 p-[2px]">
            <div className="h-full w-full rounded-[14px] bg-black p-2">
              <Cpu className="h-full w-full" />
            </div>
          </div>
          <h1 className="text-3xl font-bold">电控组</h1>
          <p className="mt-2 max-w-2xl text-white/70">
            底层驱动、总线通信（CAN/UART/USB/以太网）、任务调度与运动控制，上位机协同联调。
          </p>
        </header>

        <section className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <Panel title="职责">
            <List items={['设备驱动与调度', '通信协议与容错', '运动控制与上位机对接']} />
          </Panel>
          <Panel title="技能栈">
            <Tags items={['C/C++', 'RTOS', 'ROS2 / Python']} />
          </Panel>
          <Panel title="在招方向">
            <TagsStrong items={['嵌入式开发', '控制算法', '上位机开发']} />
          </Panel>
        </section>

        <section className="mx-auto mt-8 max-w-4xl">
          <h2 className="mb-3 text-sm font-semibold text-white/80">成员模板</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <MemberCard name="姓名 C" role="嵌入式开发" intro="STM32 驱动开发，熟悉 FreeRTOS 与硬件抽象层。" />
            <MemberCard name="姓名 D" role="控制算法" intro="姿态与速度闭环，能量管理与参数标定经验丰富。" />
          </div>
          <p className="mt-2 text-xs text-white/50">复制卡片快速添加新成员。</p>
        </section>

        <section className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white/5 p-5">
          <h2 className="mb-3 text-sm font-semibold text-white/80">学习与入门资料</h2>
          <p className="mb-4 text-sm text-white/70">
            推荐从 MCU 外设/驱动入门，完成串口/定时器/CAN 的小练习，再逐步建设任务调度框架与通信协议。
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryLink href="https://github.com/F-E-v-e-r"><Github className="h-4 w-4" /> GitHub 组织</PrimaryLink>
            <GhostLink href="https://space.bilibili.com/3546615040182909?spm_id_from=333.337.0.0"><Video className="h-4 w-4" /> B站：周更日志</GhostLink>
            <GhostLink href="https://www.douyin.com/user/MS4wLjABAAAAFUa1v8ke5YrFnkvrRzodnRmvnL8fgUKuun6dkA8KriTUavjs_XZSAgW5w3e_TB8W?from_tab_name=main"><Globe className="h-4 w-4" /> 抖音：花絮</GhostLink>
            <GhostLink href="https://www.robomaster.com/zh-CN"><Globe className="h-4 w-4" /> RoboMaster 官网</GhostLink>
            <GhostLink href="mailto:FEver-RM@outlook.com"><Mail className="h-4 w-4" /> FEver-RM@outlook.com</GhostLink>
            <PrimaryLink href="https://www.wjx.cn/vm/e5X1rtd.aspx"><LinkIcon className="h-4 w-4" /> 报名表</PrimaryLink>
          </div>
        </section>
    </main>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) { return <div className="rounded-2xl bg-white/5 p-5"><div className="mb-3 text-sm font-semibold text-white/80">{title}</div>{children}</div>; }
function List({ items }: { items: string[] }) { return <ul className="space-y-2 text-sm text-white/80">{items.map((t)=>(<li key={t} className="flex items-start gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/50" /><span>{t}</span></li>))}</ul>; }
function Tags({ items }: { items: string[] }) { return <div className="flex flex-wrap gap-2 text-xs">{items.map((t)=>(<span key={t} className="rounded-full bg-white/10 px-3 py-1">{t}</span>))}</div>; }
function TagsStrong({ items }: { items: string[] }) { return <div className="flex flex-wrap gap-2 text-xs">{items.map((t)=>(<span key={t} className="rounded-full bg-gradient-to-r from-white/15 to-white/10 px-3 py-1">{t}</span>))}</div>; }
function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) { return <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 p-[1.5px]"><span className="rounded-[12px] bg-black px-3 py-1.5">{children}</span></a>; }
function GhostLink({ href, children }: { href: string; children: React.ReactNode }) { return <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 hover:bg-white/15">{children}</a>; }
function MemberCard({ name, role, intro }: { name: string; role: string; intro: string }) { return (<div className="rounded-2xl bg-white/5 p-4"><div className="mb-3 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><UserRound className="h-5 w-5" /></div><div><div className="text-sm font-semibold">{name}</div><div className="text-xs text-white/60">{role}</div></div></div><p className="text-sm text-white/80">{intro}</p></div>); }
