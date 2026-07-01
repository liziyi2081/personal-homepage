# data-pulse

## Purpose

沿粒子网络连线穿梭的数据脉冲光点效果，模拟数据包在网络中传输的视觉。

## ADDED Requirements

### Requirement: 数据脉冲光点
系统 SHALL 在 Canvas 背景的粒子网络连线中渲染穿梭的数据脉冲光点，模拟数据包传输的视觉效果。

#### Scenario: 数据脉冲沿连线移动
- **WHEN** 用户访问任意页面
- **THEN** Canvas 背景中可见 3-5 个明亮的青紫色光点沿粒子间连线平滑穿梭，速度 0.3-0.8 px/frame，脉冲光点 opacity 0.4-0.7，尺寸 3-5px

#### Scenario: 脉冲到达端点后跳转
- **WHEN** 一个数据脉冲光点到达连线端点粒子
- **THEN** 脉冲跳转到该粒子的另一条连线继续穿梭，或在附近重新选择起点

#### Scenario: 移动端脉冲减少
- **WHEN** 用户在移动设备访问
- **THEN** 数据脉冲数量减少至 1-2 个

#### Scenario: 弱动画模式下降级
- **WHEN** 系统 prefers-reduced-motion
- **THEN** 数据脉冲不渲染
