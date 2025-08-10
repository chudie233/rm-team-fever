'use client';

import React, { useMemo, useState } from 'react';
import {
  Github,
  Youtube,
  Globe,
  Mail,
  Copy,
  MapPin,
  Link as LinkIcon,
  Cog,
  Cpu,
  CircuitBoard,
  Camera,
  Megaphone,
  ChevronRight,
  X,
} from 'lucide-react';

type GroupMeta = {
  id: 'mech' | 'elec' | 'pcb' | 'vision' | 'ops';
  name: string;
  icon: React.ElementType;
  gradient: string;
  brief: string;
  duties: string[];
  stack: string[];
  recruiting: string[];
  links: { label: string; href: string }[];
};

export default function RoboMasterTeamHome() {
  const [activeGroup, setActiveGroup] = useState<null | GroupMeta>(null);

  const groups = useMemo<GroupMeta[]>(
    () => [
      {
        id: 'mech',
        name: '机械组',
        icon: Cog,
        gradient: 'from-cyan-400 via-sky-500 to-blue-600',
        brief:
          '负责整机机械结构、底盘/云台/发射机构设计与迭代，落地为可靠、易维护的实车。',
        duties: ['整机方案、运动学与机构设计', '材料与工艺、装配与容错', '仿真验证（静力/动力/碰撞/热）'],
        stack: ['SolidWorks / Onshape', 'Ansys / Simscale', '3D 打印与 CNC'],
        recruiting: ['结构设计', '测试工程', '加工与工装'],
        links: [
          { label: '机构资料库（示例）', href: '#' },
          { label: '测试用例规范（示例）', href: '#' },
        ],
      },
      {
        id: 'elec',
        name: '电控组',
        icon: Cpu,
        gradient: 'from-fuchsia-400 via-pink-500 to-rose-600',
        brief:
          '负责整车控制与任务逻辑，通信协议、底层驱动与上位机联调，保障车队协作。',
        duties: ['底层驱动与任务调度', '总线通信（CAN/UART/USB/以太网）', '运动控制与自瞄对接'],
        stack: ['C/C++', 'RTOS', 'ROS2 / Python'],
        recruiting: ['嵌入式开发', '控制算法', '上位机开发'],
        links: [
          { label: '电控代码规范（示例）', href: '#' },
          { label: '上位机 UI 设计稿（示例）', href: '#' },
        ],
      },
      {
        id: 'pcb',
        name: '硬件组',
        icon: CircuitBoard,
        gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
        brief:
          '负责电源、驱动与传感硬件方案，原理图与 PCB 设计、打样测试与可靠性评估。',
        duties: ['电源/电机驱动设计', '原理图/PCB/Layout 与 SI/PI', 'EMC/ESD/安规与可靠性测试'],
        stack: ['Altium / KiCad', '示波器/逻分', 'DFM/DFT/ATE'],
        recruiting: ['电源/数模混合', '高速信号', '测试工程'],
        links: [
          { label: '硬件设计模板（示例）', href: '#' },
          { label: 'BOM 与选型表（示例）', href: '#' },
        ],
      },
      {
        id: 'vision',
        name: '视觉组',
        icon: Camera,
        gradient: 'from-indigo-400 via-violet-500 to-purple-600',
        brief:
          '负责目标检测、视觉追踪与弹道补偿，落地在嵌入式与上位机的实时推理。',
        duties: ['数据标注与工程化训练', '目标检测/跟踪/位姿估计', '部署与加速（CUDA/ONNX/TensorRT）'],
        stack: ['Python / C++', 'PyTorch / ONNX', 'TensorRT / CUDA'],
        recruiting: ['算法工程', '工程部署', '数据工程'],
        links: [
          { label: '数据集规范（示例）', href: '#' },
          { label: '模型 Zoo（示例）', href: '#' },
        ],
      },
      {
        id: 'ops',
        name: '运营组',
        icon: Megaphone,
        gradient: 'from-amber-400 via-orange-500 to-red-600',
        brief: '负责品牌形象、内容与赛事运营，赞助拓展与招新活动策划。',
        duties: ['品牌设计与视觉规范', '内容运营（图文/视频/直播）', '活动策划、对外合作与赞助'],
        stack: ['Notion / 飞书', 'PR/AE/PS', '数据分析'],
        recruiting: ['品牌设计', '内容编辑', '活动执行'],
        links: [
          { label: '品牌手册（示例）', href: '#' },
          { label: '投放与复盘（示例）', href: '#' },
        ],
      },
    ],
    []
  );

  return (
<div className="min-h-screen w-full bg-gradient-to-br from-fuchsia-900 via-black to-emerald-900 text-white selection:bg-white/10 selection:text-white relative">
<div className="absolute inset-0 opacity-70 [background:radial-gradient(1200px_circle_at_10%_10%,rgba(236,72,153,.25),transparent_60%),radial-gradient(900px_circle_at_90%_20%,rgba(34,211,238,.25),transparent_55%),linear-gradient(to-br,rgba(236,72,153,0.15),rgba(34,197,94,0.15))]" />

  {/* <div className="absolute inset-0 bg-black/50" /> 半透明黑遮罩，提升文字可读性 */}
  <NeonBackdrop />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-emerald-400 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-black" />
            </div>
            <span className="text-lg font-semibold tracking-wide">FEver战队</span>
            <span className="ml-2 hidden rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/70 md:inline-block">
              初心高于胜负，成长胜于输赢 ✦
            </span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a className="nav-link" href="#groups">小组</a>
            <a className="nav-link" href="#projects">项目</a>
            <a className="nav-link" href="#links">链接</a>
            <a className="nav-link" href="#join">加入我们</a>
          </nav>
          <div className="flex items-center gap-3">
            <GradientButton as="a" href="#groups">探索小组</GradientButton>
            <GhostButton as="a" href="https://www.robomaster.com/zh-CN">官网链接</GhostButton>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-12 md:px-6 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              2026 赛季 招新进行中
            </div>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                RoboMaster
                FEver战队
              </span>
              <br />
              战队主页
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              我们是一支充满创造力与执行力的高校机器人战队，专注机械、电控、硬件、视觉与运营协作，
              在赛场上把灵感变成速度与精度。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4" id="links-quick">
              <SocialLink href="https://github.com/F-E-v-e-r" label="GitHub"><Github className="h-5 w-5" /></SocialLink>
              <SocialLink href="https://space.bilibili.com/3546615040182909?spm_id_from=333.337.0.0" label="Bilibili"><Youtube className="h-5 w-5" /></SocialLink>
              <SocialLink href="https://www.douyin.com/user/MS4wLjABAAAAFUa1v8ke5YrFnkvrRzodnRmvnL8fgUKuun6dkA8KriTUavjs_XZSAgW5w3e_TB8W?from_tab_name=main" label="抖音"><Globe className="h-5 w-5" /></SocialLink>
              <SocialLink href="mailto:FEver-RM@outlook.com" label="Email"><Mail className="h-5 w-5" /></SocialLink>
            </div>
          </div>

          <HeroShowcase />
        </div>
      </section>

      <section id="groups" className="relative">
        <SectionTitle title="分工协作 · 五大核心小组" subtitle="点击卡片先看简介；如需更多信息，弹窗里点“详情”进入独立子页面。" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 pb-14 md:grid-cols-2 md:px-6 lg:grid-cols-3">
          {groups.map((g) => (
            <GroupCard key={g.id} meta={g} onOpen={() => setActiveGroup(g)} />
          ))}
        </div>

        {activeGroup && <GroupModal meta={activeGroup} onClose={() => setActiveGroup(null)} />}
      </section>

      <section id="projects" className="relative">
        <SectionTitle title="项目与成果" subtitle="这里放置代表性项目、技术沉淀与比赛奖项。" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 pb-14 md:grid-cols-2 md:px-6 lg:grid-cols-3">
          {[
            { title: '智能自瞄系统', desc: '融合目标检测/位姿估计与预测补偿，上位机到嵌入式端到端管线。', badge: '视觉' },
            { title: '高功率驱动模组', desc: '高效电机驱动与电源管理，一体化布局提升可靠性与维护性。', badge: '硬件' },
            { title: '多车协同通信', desc: '基于 CAN/以太网的车队通信协议，任务分配与容错机制。', badge: '电控' },
          ].map((p, i) => (<ProjectCard key={i} {...p} />))}
        </div>
      </section>

      <section id="links" className="relative">
        <SectionTitle title="社交媒体 & GitHub" subtitle="官方阵地一键直达" />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 pb-14 md:grid-cols-2 md:px-6 lg:grid-cols-3">
          <LinkRow icon={Github} label="GitHub 组织" href="https://github.com/F-E-v-e-r" note="开源代码与文档" />
          <LinkRow icon={Youtube} label="Bilibili" href="https://space.bilibili.com/3546615040182909?spm_id_from=333.337.0.0" note="赛事视频/周更日志" />
          <LinkRow icon={Globe} label="抖音" href="https://www.douyin.com/user/MS4wLjABAAAAFUa1v8ke5YrFnkvrRzodnRmvnL8fgUKuun6dkA8KriTUavjs_XZSAgW5w3e_TB8W?from_tab_name=main" note="短视频与花絮" />
          <LinkRow icon={Mail} label="团队邮箱" href="mailto:FEver-RM@outlook.com" note="对外合作/招新咨询" />
        </div>
      </section>

      <section id="join" className="relative">
        <SectionTitle title="加入我们" subtitle="把灵感装上轮子，用工程让它跑起来。" />
        <div className="mx-auto max-w-5xl px-4 pb-16 md:px-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background:radial-gradient(1200px_circle_at_20%_20%,rgba(99,102,241,.25),transparent_60%),radial-gradient(900px_circle_at_80%_30%,rgba(16,185,129,.2),transparent_55%),radial-gradient(700px_circle_at_50%_90%,rgba(236,72,153,.2),transparent_50%)]" />
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-semibold">2026 赛季校内招新</h3>
                <p className="mt-2 max-w-xl text-white/70">填写报名表，我们会在正式面试开始 72 小时内邮件回复并安排群面/试工坊。</p>
                <div className="mt-3 inline-flex items-center gap-3 text-sm text白/60">
                  <MapPin className="h-4 w-4" /> 智能制造学院/社团发展中心 · 周一/三/五 晚
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <GradientButton as="a" href="https://www.wjx.cn/vm/e5X1rtd.aspx">填写报名表</GradientButton>
                <GhostButton onClick={() => copyToClipboard('FEver-RM@outlook.com')} aria-label="复制邮箱">
                  <Copy className="h-4 w-4" />
                  <span className="ml-1">复制邮箱</span>
                </GhostButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function NeonBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-60 [background:radial-gradient(1200px_circle_at_10%_10%,rgba(59,130,246,.18),transparent_60%),radial-gradient(900px_circle_at_90%_20%,rgba(236,72,153,.20),transparent_55%),radial-gradient(1000px_circle_at_20%_80%,rgba(16,185,129,.18),transparent_50%),radial-gradient(800px_circle_at_80%_85%,rgba(168,85,247,.20),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24px,rgba(255,255,255,0.05)_25px),linear-gradient(90deg,transparent_24px,rgba(255,255,255,0.05)_25px)] bg-[size:25px_25px] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/60 to-transparent" />
    </div>
  );
}

type GradientButtonProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
} & React.ComponentPropsWithoutRef<'button'>;

function GradientButton({ as: As = 'button', className = '', children, ...props }: GradientButtonProps) {
  return (
    <As className={`inline-flex items-center justify-center rounded-2xl border border白/10 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 p-[1.5px] text-sm font-semibold text-white shadow-[0_0_24px_rgba(77,151,255,0.25)] ${className}`} {...props}>
      <span className="rounded-[14px] bg-black px-4 py-2">{children}</span>
    </As>
  );
}

function GhostButton({ as: As = 'button', className = '', children, ...props }: GradientButtonProps) {
  return (
    <As className={`inline-flex items-center justify-center rounded-2xl border border白/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 ${className}`} {...props}>
      {children}
    </As>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-14 md:px-6">
      <div className="mb-6 flex items-center gap-3 text-xs text-white/60">
        <span className="inline-flex h-5 items-center rounded-full border border-white/10 bg-white/5 px-2">
          <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
          彩色·黑
        </span>
        <span className="hidden text-white/40 md:inline-block">|</span>
        <span className="hidden text-white/60 md:inline-block">Neon on Black</span>
      </div>
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 max-w-2xl text白/70">{subtitle}</p>}
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="card-hover inline-flex items-center gap-2 rounded-xl border border白/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white" aria-label={label} title={label}>
      {children}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

function HeroShowcase() {
  return (
    <div className="relative">
      <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border白/10 bg-gradient-to-br from-white/10 to-transparent p-4">
        <div className="grid h-full w-full grid-cols-2 gap-4">
          <Block title="机械" icon={Cog} colorClass="from-cyan-400 to-blue-500" lines={3} />
          <Block title="电控" icon={Cpu} colorClass="from-pink-400 to-rose-500" lines={4} />
          <Block title="硬件" icon={CircuitBoard} colorClass="from-emerald-400 to-teal-500" lines={4} />
          <Block title="视觉" icon={Camera} colorClass="from-indigo-400 to-violet-500" lines={5} />
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
      </div>
      <p className="mt-3 text-center text-sm text-white/60">工程协作 · 一体联调 · 即插即战</p>
    </div>
  );
}

function Block({ title, icon: Ico, colorClass, lines = 4 }: { title: string; icon: React.ElementType; colorClass: string; lines?: number }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border白/10 bg-black/60 p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
      <div className={`absolute -left-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${colorClass} opacity-30 blur-xl`} />
      <div className="relative flex items-center gap-2">
        <div className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r ${colorClass} p-[1.5px]`}>
          <div className="h-full w-full rounded-[10px] bg-black p-1"><Ico className="h-full w-full" /></div>
        </div>
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <div className="mt-3 space-y-2">{Array.from({ length: lines }).map((_, i) => (<div key={i} className="h-2 w-full rounded bg-white/10" />))}</div>
    </div>
  );
}

function GroupCard({ meta, onOpen }: { meta: GroupMeta; onOpen: () => void }) {
  const Icon = meta.icon;
  return (
    <button onClick={onOpen} className="card-hover group relative overflow-hidden rounded-2xl border border白/10 bg-white/5 p-5 text-left">
      <div className={`pointer-events-none absolute -inset-1 -z-10 opacity-30 blur-2xl bg-gradient-to-r ${meta.gradient}`} />
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r ${meta.gradient} p-[2px]`}>
            <div className="h-full w-full rounded-[14px] bg-black p-1"><Icon className="h-full w-full" /></div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{meta.name}</h3>
            <p className="mt-1 text-sm text-white/70">{meta.brief}</p>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-white/50 transition group-hover:translate-x-0.5" />
      </div>
    </button>
  );
}

function GroupModal({ meta, onClose }: { meta: GroupMeta; onClose: () => void }) {
  const Icon = meta.icon;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border白/10 bg-black">
        <div className={`absolute -inset-1 opacity-30 blur-2xl bg-gradient-to-r ${meta.gradient}`} />
        <div className="relative p-6 md:p-8">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r ${meta.gradient} p-[2px]`}>
                <div className="h-full w-full rounded-[14px] bg-black p-1"><Icon className="h-full w-full" /></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{meta.name} </h3>
                <p className="text-sm text-white/70">{meta.brief}</p>
              </div>
            </div>
            <button aria-label="关闭" onClick={onClose} className="rounded-full border border白/10 bg-white/5 p-2 text-white/70 transition hover:bg-white/10">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <InfoPanel title="职责">
              <ul className="space-y-2 text-sm text-white/80">
                {meta.duties.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </InfoPanel>

            <InfoPanel title="技能栈">
              <div className="flex flex-wrap gap-2">
                {meta.stack.map((s, i) => (<span key={i} className="rounded-full border border白/10 bg-white/5 px-3 py-1 text-xs text白/80">{s}</span>))}
              </div>
            </InfoPanel>

            <InfoPanel title="在招方向">
              <div className="flex flex-wrap gap-2">
                {meta.recruiting.map((s, i) => (<span key={i} className="rounded-full border border白/10 bg-gradient-to-r from-white/10 to-white/5 px-3 py-1 text-xs text-white">{s}</span>))}
              </div>
            </InfoPanel>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {meta.links.map((l, i) => (
                <a key={i} href={l.href} className="inline-flex items-center gap-2 rounded-xl border border白/10 bg-white/5 px-3 py-2 text-sm text白/80 hover:text-white">
                  <LinkIcon className="h-4 w-4" /> {l.label}
                </a>
              ))}
            </div>
            <GradientButton as="a" href={`/groups/${meta.id}`}>详情</GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border白/10 bg-white/5 p-4">
      <div className="mb-3 text-sm font-semibold text白/80">{title}</div>
      {children}
    </div>
  );
}

function ProjectCard({ title, desc, badge }: { title: string; desc: string; badge: string }) {
  return (
    <div className="card-hover relative overflow-hidden rounded-2xl border border白/10 bg-white/5 p-5">
      <div className="absolute -inset-1 -z-10 opacity-20 blur-2xl [background:conic-gradient(from_90deg,rgba(236,72,153,.35),rgba(34,211,238,.35),rgba(16,185,129,.35),rgba(99,102,241,.35),rgba(236,72,153,.35))]" />
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="rounded-full border border白/10 bg-black/50 px-2 py-1 text-xs text白/70">{badge}</span>
      </div>
      <p className="mt-2 text-sm text白/70">{desc}</p>
      <div className="mt-4 inline-flex items-center gap-1 text-sm text白/80">
        <a href="#" className="rounded-lg border border白/10 bg-white/5 px-2 py-1">文档</a>
        <a href="#" className="rounded-lg border border白/10 bg-white/5 px-2 py-1">仓库</a>
      </div>
    </div>
  );
}

function LinkRow({ icon: Icon, label, href, note }: { icon: React.ElementType; label: string; href: string; note: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 rounded-2xl border border白/10 bg-white/5 p-4 transition hover:bg-white/10">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 p-[2px]">
          <div className="h-full w-full rounded-[14px] bg-black p-1"><Icon className="h-full w-full" /></div>
        </div>
        <div>
          <div className="font-medium">{label}</div>
          <div className="text-xs text白/60">{note}</div>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text白/50 transition group-hover:translate-x-0.5" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border白/10">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 text白/90">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-emerald-400 p-[1.5px]"><div className="h-full w-full rounded-[10px] bg-black" /></div>
              <span className="font-semibold">FEver战队</span>
            </div>
            <p className="mt-2 text-sm text白/60">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text白/60">
            <a className="nav-link" href="#links">链接</a><span>·</span>
            <a className="nav-link" href="#join">加入</a><span>·</span>
            <a className="nav-link" href="#home">顶部</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function copyToClipboard(text: string) {
  if (typeof navigator !== 'undefined' && 'clipboard' in navigator) {
    (navigator as Navigator).clipboard.writeText(text);
    alert('已复制到剪贴板：' + text);
  } else {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('已复制到剪贴板：' + text);
  }
}

